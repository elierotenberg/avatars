import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let clotheColor = [];

  if (options.includes('clothesColor', 'black')) {
    clotheColor.push('black');
  }

  if (options.includes('clothesColor', 'blue')) {
    clotheColor.push('Blue01', 'Blue02', 'Blue03');
  }

  if (options.includes('clothesColor', 'gray')) {
    clotheColor.push('Gray01', 'Gray02');
  }

  if (options.includes('clothesColor', 'heather')) {
    clotheColor.push('Heather');
  }

  if (options.includes('clothesColor', 'pastel')) {
    clotheColor.push('PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow');
  }

  if (options.includes('clothesColor', 'pink')) {
    clotheColor.push('Pink');
  }

  if (options.includes('clothesColor', 'red')) {
    clotheColor.push('Red');
  }

  if (options.includes('clothesColor', 'white')) {
    clotheColor.push('White');
  }

  return random.pickone(clotheColor);
}
