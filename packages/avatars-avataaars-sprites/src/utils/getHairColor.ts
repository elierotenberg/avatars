import Random from '@dicebear/avatars/lib/random';
import Options from '../options';

export default function(options: Options, random: Random) {
  let hairColor = [];

  if (options.includes('hairColor', 'auburn')) {
    hairColor.push('Auburn');
  }

  if (options.includes('hairColor', 'black')) {
    hairColor.push('Black');
  }

  if (options.includes('hairColor', 'blonde')) {
    hairColor.push('Blonde', 'BlondeGolden');
  }

  if (options.includes('hairColor', 'brown')) {
    hairColor.push('Brown', 'BrownDark');
  }

  if (options.includes('hairColor', 'pastel')) {
    hairColor.push('PastelPink');
  }

  if (options.includes('hairColor', 'platinum')) {
    hairColor.push('Platinum');
  }

  if (options.includes('hairColor', 'red')) {
    hairColor.push('Red');
  }

  if (options.includes('hairColor', 'gray')) {
    hairColor.push('SilverGray');
  }

  return random.pickone(hairColor);
}
