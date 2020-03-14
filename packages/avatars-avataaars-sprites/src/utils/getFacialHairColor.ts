import Random from '@dicebear/avatars/lib/random';
import Options from '../options';

export default function(options: Options, random: Random) {
  let facialHairColor = [];

  if (options.includes('facialHairColor', 'auburn')) {
    facialHairColor.push('Auburn');
  }

  if (options.includes('facialHairColor', 'black')) {
    facialHairColor.push('Black');
  }

  if (options.includes('facialHairColor', 'blonde')) {
    facialHairColor.push('Blonde', 'BlondeGolden');
  }

  if (options.includes('facialHairColor', 'brown')) {
    facialHairColor.push('Brown', 'BrownDark');
  }

  if (options.includes('facialHairColor', 'platinum')) {
    facialHairColor.push('Platinum');
  }

  if (options.includes('facialHairColor', 'red')) {
    facialHairColor.push('Red');
  }

  return random.pickone(facialHairColor);
}
