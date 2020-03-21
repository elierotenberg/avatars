import { ColorCollection } from '@dicebear/avatars';
import type { Random, Options as OptionsContainer } from '@dicebear/avatars';

// @ts-ignore
import initials from 'initials';
import Bowser from 'bowser';

type Options = OptionsContainer<{
  backgroundColors?: string[];
  backgroundColorLevel?: number;
  fontSize?: number;
  chars?: number;
  bold?: boolean;
}>;

export default function(random: Random, options: Options) {
  options.setDefaults({
    backgroundColors: [],
    backgroundColorLevel: 600,
    fontSize: 50,
    chars: 2,
    bold: false
  }, false);

  let userAgent = options.get('userAgent');
  let isInternetExplorer = userAgent && Bowser.getParser(userAgent).satisfies({
      ie: '>0',
      edge: '<=18'
    });
  let isSafari = userAgent && Bowser.getParser(userAgent).satisfies({
      safari: '>0'
    });

  if (false === options.has('background')) {
    let colorCollection = new ColorCollection();
    let backgroundColorLevel = options.get('backgroundColorLevel');

    let backgroundColors = Object
      .values(colorCollection.get(backgroundColorLevel))
      .filter(([name]) => options.get('backgroundColors', [name]).includes(name))
      .map(([,value]) => value);

    options.set('background', random.pickone(backgroundColors));
  }

  let seedInitials = (initials(random.seed.trim()) as string).toLocaleUpperCase().slice(0, options.get('chars'));
  let fontFamily = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif";
  let fontSize = options.get('fontSize');
  let bold = options.get('bold');

  // prettier-ignore
  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate;" viewBox="0 0 1 1" version="1.1">
      <text
        x="50%"
        y="50%"
        style="line-height: 1; ${bold ? 'font-weight: bold;' : ''} font-family: ${fontFamily}; font-size: ${fontSize / 100}px"
        ${isInternetExplorer ? 'dy=".35em"' : `dy="${isSafari ? '.05em' : '.1em'}" alignment-baseline="middle"`}
        fill="#FFF"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${seedInitials}
      </text>
    </svg>
  `;
}
