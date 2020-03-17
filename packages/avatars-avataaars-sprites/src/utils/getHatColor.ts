import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let hatColor = [];

  if (options.includes('hatColor', 'black')) {
    hatColor.push('black');
  }

  if (options.includes('hatColor', 'blue')) {
    hatColor.push('Blue01', 'Blue02', 'Blue03');
  }

  if (options.includes('hatColor', 'gray')) {
    hatColor.push('Gray01', 'Gray02');
  }

  if (options.includes('hatColor', 'heather')) {
    hatColor.push('Heather');
  }

  if (options.includes('hatColor', 'pastel')) {
    hatColor.push('PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow');
  }

  if (options.includes('hatColor', 'pink')) {
    hatColor.push('Pink');
  }

  if (options.includes('hatColor', 'red')) {
    hatColor.push('Red');
  }

  if (options.includes('hatColor', 'white')) {
    hatColor.push('White');
  }

  return random.pickone(hatColor);
}
