import type Options from '../options';

export default function (options: Options) {
  switch (options.get('style')) {
    case 'circle':
      return 'Circle';

    default:
      return 'Transparent';
  }
}
