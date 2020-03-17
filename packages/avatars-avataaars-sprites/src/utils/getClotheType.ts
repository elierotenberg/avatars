import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let clotheType = [];

  if (options.includes('clothes', 'blazer')) {
    clotheType.push('BlazerShirt', 'BlazerSweater');
  }

  if (options.includes('clothes', 'sweater')) {
    clotheType.push('CollarSweater');
  }

  if (options.includes('clothes', 'shirt')) {
    clotheType.push('GraphicShirt', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck');
  }

  if (options.includes('clothes', 'hoodie')) {
    clotheType.push('Hoodie');
  }

  if (options.includes('clothes', 'overall')) {
    clotheType.push('Overall');
  }

  return random.pickone(clotheType);
}
