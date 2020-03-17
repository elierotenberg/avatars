import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let facialHairType = [];

  if (options.includes('facialHair', 'medium')) {
    facialHairType.push('BeardMedium');
  }

  if (options.includes('facialHair', 'light')) {
    facialHairType.push('BeardLight');
  }

  if (options.includes('facialHair', 'majestic')) {
    facialHairType.push('BeardMajestic');
  }

  if (options.includes('facialHair', 'fancy')) {
    facialHairType.push('MoustacheFancy');
  }

  if (options.includes('facialHair', 'magnum')) {
    facialHairType.push('MoustacheMagnum');
  }

  let pickedFacialHairType = random.pickone(facialHairType);

  if (false === random.bool(options.get('facialHairChance', 10))) {
    return 'Blank';
  }

  return pickedFacialHairType;
}
