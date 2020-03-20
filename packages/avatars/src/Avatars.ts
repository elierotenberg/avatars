import Random from './Random';
import Options from './Options';
import Parser from './Parser';

export type SpriteCollection<T> = (random: Random, options?: Options<T>) => string | svgson.schema;

export default class Avatars<T> {
  protected spriteCollection: SpriteCollection<T>;
  protected defaultOptions?: T;

  /**
   * @param spriteCollection
   */
  constructor(spriteCollection: SpriteCollection<T>, defaultOptions?: T) {
    this.spriteCollection = spriteCollection;
    this.defaultOptions = {
      userAgent: typeof window !== 'undefined' && window.navigator && window.navigator.userAgent,
      ...defaultOptions
    };
  }

  /**
   * Creates an avatar
   *
   * @param seed
   */
  public create(seed: string, options?: T) {
    const optionsContainer = new Options<T>(options, this.defaultOptions);

    let svg = Parser.parse(this.spriteCollection(new Random(seed), optionsContainer));

    let viewBox = svg.attributes['viewBox'].split(' ');
    let viewBoxX = parseInt(viewBox[0]);
    let viewBoxY = parseInt(viewBox[1]);
    let viewBoxWidth = parseInt(viewBox[2]);
    let viewBoxHeight = parseInt(viewBox[3]);

    if (optionsContainer.has('width')) {
      svg.attributes['width'] = optionsContainer.get('width').toString();
    }

    if (optionsContainer.has('height')) {
      svg.attributes['height'] = optionsContainer.get('height').toString();
    }

    if (optionsContainer.has('margin')) {
      let groupable: svgson.schema[] = [];

      svg.children = svg.children.filter(child => {
        if (this.isGroupable(child)) {
          groupable.push(child);

          return false;
        }

        return true;
      });

      svg.children.push({
        name: 'g',
        type: 'element',
        value: '',
        children: [
          {
            name: 'g',
            type: 'element',
            value: '',
            children: [
              {
                name: 'rect',
                type: 'element',
                value: '',
                children: [],
                attributes: {
                  fill: 'none',
                  width: viewBoxWidth.toString(),
                  height: viewBoxHeight.toString(),
                  x: viewBoxX.toString(),
                  y: viewBoxY.toString()
                }
              },
              ...groupable
            ],
            attributes: {
              transform: `scale(${1 - (optionsContainer.get('margin') * 2) / 100})`
            }
          }
        ],
        attributes: {
          // prettier-ignore
          transform: `translate(${viewBoxWidth * optionsContainer.get('margin') / 100}, ${viewBoxHeight * optionsContainer.get('margin') / 100})`
        }
      });
    }

    if (optionsContainer.has('background')) {
      svg.children.unshift({
        name: 'rect',
        type: 'element',
        value: '',
        children: [],
        attributes: {
          fill: optionsContainer.get('background'),
          width: viewBoxWidth.toString(),
          height: viewBoxHeight.toString(),
          x: viewBoxX.toString(),
          y: viewBoxY.toString()
        }
      });
    }

    if (optionsContainer.has('radius')) {
      let groupable: svgson.schema[] = [];

      svg.children = svg.children.filter(child => {
        if (this.isGroupable(child)) {
          groupable.push(child);

          return false;
        }

        return true;
      });

      svg.children.push(
        {
          name: 'mask',
          type: 'element',
          value: '',
          children: [
            {
              name: 'rect',
              type: 'element',
              value: '',
              children: [],
              attributes: {
                width: viewBoxWidth.toString(),
                height: viewBoxHeight.toString(),
                rx: ((viewBoxWidth * optionsContainer.get('radius')) / 100).toString(),
                ry: ((viewBoxHeight * optionsContainer.get('radius')) / 100).toString(),
                fill: '#fff',
                x: viewBoxX.toString(),
                y: viewBoxY.toString()
              }
            }
          ],
          attributes: {
            id: 'avatarsRadiusMask'
          }
        },
        {
          name: 'g',
          type: 'element',
          value: '',
          children: groupable,
          attributes: {
            mask: `url(#avatarsRadiusMask)`
          }
        }
      );
    }

    return optionsContainer.get('base64')
      ? `data:image/svg+xml;base64,${window.btoa(Parser.stringify(svg))}`
      : Parser.stringify(svg);
  }

  private isGroupable(element: svgson.schema) {
    return element.type === 'element' && ['title', 'desc', 'defs', 'metadata'].indexOf(element.name) === -1;
  }
}
