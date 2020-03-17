import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let accessoriesType = [];

  if (options.includes('accessories', 'kurt')) {
    accessoriesType.push('Kurt');
  }

  if (options.includes('accessories', 'prescription01')) {
    accessoriesType.push('Prescription01');
  }

  if (options.includes('accessories', 'prescription02')) {
    accessoriesType.push('Prescription02');
  }

  if (options.includes('accessories', 'round')) {
    accessoriesType.push('Round');
  }

  if (options.includes('accessories', 'sunglasses')) {
    accessoriesType.push('Sunglasses');
  }

  if (options.includes('accessories', 'wayfarers')) {
    accessoriesType.push('Wayfarers');
  }

  let pickedAccessoriesType = random.pickone(accessoriesType);

  if (false === random.bool(options.get('accessoriesChance', 10))) {
    return 'Blank';
  }

  return pickedAccessoriesType;
}
