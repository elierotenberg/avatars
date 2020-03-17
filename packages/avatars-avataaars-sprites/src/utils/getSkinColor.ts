import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let skinColor = [];

  if (options.includes('skin', 'tanned')) {
    skinColor.push('Tanned');
  }

  if (options.includes('skin', 'yellow')) {
    skinColor.push('Yellow');
  }

  if (options.includes('skin', 'pale')) {
    skinColor.push('Pale');
  }

  if (options.includes('skin', 'light')) {
    skinColor.push('Light');
  }

  if (options.includes('skin', 'brown')) {
    skinColor.push('Brown');
  }

  if (options.includes('skin', 'darkBrown')) {
    skinColor.push('DarkBrown');
  }

  if (options.includes('skin', 'black')) {
    skinColor.push('Black');
  }

  return random.pickone(skinColor);
}
