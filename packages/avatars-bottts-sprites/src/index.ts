import type { Random } from '@dicebear/avatars';
import { ColorCollection } from '@dicebear/avatars';
import Options from './options';

import eyesCollection from './eyes';
import faceCollection from './face';
import mouthCollection from './mouth';
import sidesCollection from './sides';
import textureCollection from './texture';
import topCollection from './top';

const group = (random: Random, content: string, chance: number, x: number, y: number) => {
  if (random.bool(chance)) {
    return `<g transform="translate(${x}, ${y})">${content}</g>`;
  }

  return '';
};

export default function(random: Random, options: Options) {
  let colorCollection = new ColorCollection();
  let primaryColors = colorCollection.get(options.get('primaryColorLevel', 600));
  let secondaryColors = colorCollection.get(options.get('secondaryColorLevel', 400));

  // Select colors that occur in both color levels.
  let possibleColors = Object
    .keys(primaryColors)
    .filter((name) => secondaryColors[name])
    .filter((name) => options.get('colors', [name]).includes(name));

  let primaryColorName = random.pickone(possibleColors);
  let secondaryColorName = options.get('colorful', false) ? random.pickone(possibleColors) : primaryColorName;

  let primaryColor = primaryColors[primaryColorName];
  let secondaryColor = secondaryColors[secondaryColorName];

  let eyes = random.pickone(eyesCollection);
  let face = random.pickone(faceCollection);
  let mouth = random.pickone(mouthCollection);
  let sides = random.pickone(sidesCollection);
  let texture = random.pickone(textureCollection);
  let top = random.pickone(topCollection);

  // prettier-ignore
  return [
    '<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" fill="none">',
    group(random, sides(primaryColor), options.get('sidesChance', 100), 0, 66),
    group(random, top(primaryColor), options.get('topChange', 100), 41, 0),
    group(random, face(secondaryColor, random.bool(options.get('textureChance', 50)) ? texture() : undefined), 100, 25, 44),
    group(random, mouth(), options.get('mouthChance', 100), 52, 124),
    group(random, eyes(), 100, 38, 76),
    '</svg>'
  ].join('');
}
