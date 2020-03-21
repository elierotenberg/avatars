import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function (options: Options, random: Random) {
  let clotheType = [];

  if (options.get('clothes', ['blazer']).includes('blazer')) {
    clotheType.push('BlazerShirt', 'BlazerSweater');
  }

  if (options.get('clothes', ['sweater']).includes('sweater')) {
    clotheType.push('CollarSweater');
  }

  if (options.get('clothes', ['shirt']).includes('shirt')) {
    clotheType.push('GraphicShirt', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck');
  }

  if (options.get('clothes', ['hoodie']).includes('hoodie')) {
    clotheType.push('Hoodie');
  }

  if (options.get('clothes', ['overall']).includes('overall')) {
    clotheType.push('Overall');
  }

  return random.pickone(clotheType);
}
