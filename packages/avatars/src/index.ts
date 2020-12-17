import Random from './random';
import Color from './color';
import Parser from './parser';

export type Options = {
  radius?: number;
  r?: number;
  /** @deprecated use dataUri instead */
  base64?: boolean;
  dataUri?: boolean;
  width?: number | string;
  w?: number | string;
  height?: number | string;
  h?: number | string;
  margin?: number;
  m?: number;
  background?: string;
  b?: number;
  svgAttributes?: {
    [k: string]: string | ((value?: string) => string);
  };
  /** @deprecated */
  userAgent?: string;
};

export type SpriteCollection<O = {}> = (random: Random, options?: O) => string | svgson.schema;

export default class Avatars<O> {
  public static random = Random;
  public static color = Color;

  protected spriteCollection: SpriteCollection<O>;
  protected defaultOptions?: O & Options;

  /**
   * @param spriteCollection
   */
  constructor(spriteCollection: SpriteCollection<O>, defaultOptions?: O & Options) {
    this.spriteCollection = spriteCollection;
    this.defaultOptions = {
      userAgent: typeof window !== 'undefined' && window.navigator && window.navigator.userAgent,
      ...defaultOptions,
    };
  }

  /**
   * Creates an avatar
   *
   * @param seed
   */
  public create(seed?: string, options?: O & Options) {
    options = { ...this.defaultOptions, ...options };

    // Apply alias options
    options = {
      radius: options.r,
      width: options.w,
      height: options.h,
      margin: options.m,
      background: options.b,
      ...options,
    };

    let svg = this.spriteCollection(new Random(seed), options);

    if (options) {
      svg = Parser.parse(svg);

      let viewBox = svg.attributes['viewBox'].split(' ');
      let viewBoxX = parseInt(viewBox[0]);
      let viewBoxY = parseInt(viewBox[1]);
      let viewBoxWidth = parseInt(viewBox[2]);
      let viewBoxHeight = parseInt(viewBox[3]);

      if (options.width) {
        svg.attributes['width'] = options.width.toString();
      }

      if (options.height) {
        svg.attributes['height'] = options.height.toString();
      }

      if (options.margin) {
        let groupable: svgson.schema[] = [];

        svg.children = svg.children.filter((child) => {
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
                    y: viewBoxY.toString(),
                  },
                },
                ...groupable,
              ],
              attributes: {
                transform: `scale(${1 - (options.margin * 2) / 100})`,
              },
            },
          ],
          attributes: {
            // prettier-ignore
            transform: `translate(${viewBoxWidth * options.margin / 100}, ${viewBoxHeight * options.margin / 100})`,
          },
        });
      }

      if (options.background) {
        svg.children.unshift({
          name: 'rect',
          type: 'element',
          value: '',
          children: [],
          attributes: {
            fill: options.background,
            width: viewBoxWidth.toString(),
            height: viewBoxHeight.toString(),
            x: viewBoxX.toString(),
            y: viewBoxY.toString(),
          },
        });
      }

      if (options.radius) {
        let groupable: svgson.schema[] = [];

        svg.children = svg.children.filter((child) => {
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
                  rx: ((viewBoxWidth * options.radius) / 100).toString(),
                  ry: ((viewBoxHeight * options.radius) / 100).toString(),
                  fill: '#fff',
                  x: viewBoxX.toString(),
                  y: viewBoxY.toString(),
                },
              },
            ],
            attributes: {
              id: 'avatarsRadiusMask',
            },
          },
          {
            name: 'g',
            type: 'element',
            value: '',
            children: groupable,
            attributes: {
              mask: `url(#avatarsRadiusMask)`,
            },
          }
        );
      }
      if (options.svgAttributes) {
        for (const [key, value] of Object.entries(options.svgAttributes)) {
          if (typeof value === 'string') {
            svg.attributes[key] = value;
          } else {
            svg.attributes[key] = value(svg.attributes[key]);
          }
        }
      }
    }

    svg = Parser.stringify(svg);

    if (options.dataUri) {
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }

    if (options.base64) {
      return `data:image/svg+xml;base64,${this.base64EncodeUnicode(svg)}`;
    }

    return svg;
  }

  private isGroupable(element: svgson.schema) {
    return element.type === 'element' && ['title', 'desc', 'defs', 'metadata'].indexOf(element.name) === -1;
  }

  private base64EncodeUnicode(value: string) {
    // @see https://www.base64encoder.io/javascript/
    let utf8Bytes = encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(parseInt(`0x${p1}`));
    });

    return btoa(utf8Bytes);
  }
}
