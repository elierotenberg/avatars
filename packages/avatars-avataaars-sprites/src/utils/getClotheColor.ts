import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function (options: Options, random: Random) {
  let clotheColor = [];

  if (options.get('clothesColor', ['black']).includes('black')) {
    clotheColor.push('black');
  }

  if (options.get('clothesColor', ['blue']).includes('blue')) {
    clotheColor.push('Blue01', 'Blue02', 'Blue03');
  }

  if (options.get('clothesColor', ['gray']).includes('gray')) {
    clotheColor.push('Gray01', 'Gray02');
  }

  if (options.get('clothesColor', ['heather']).includes('heather')) {
    clotheColor.push('Heather');
  }

  if (options.get('clothesColor', ['pastel']).includes('pastel')) {
    clotheColor.push('PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow');
  }

  if (options.get('clothesColor', ['pink']).includes('pink')) {
    clotheColor.push('Pink');
  }

  if (options.get('clothesColor', ['red']).includes('red')) {
    clotheColor.push('Red');
  }

  if (options.get('clothesColor', ['white']).includes('white')) {
    clotheColor.push('White');
  }

  return random.pickone(clotheColor);
}
