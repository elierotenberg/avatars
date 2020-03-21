import type { Random, Options as OptionsContainer } from '@dicebear/avatars';
import qrImage from 'qr-image';

type Options = OptionsContainer<{
  type?: string;
  color?: string;
  correctionLevel?: 'L' | 'M' | 'Q' | 'H';
}>;

export default function (random: Random, options: Options) {
  options.setDefaults(
    {
      type: 'qr',
      color: '#000',
      correctionLevel: 'M',
    },
    false
  );

  let svg = qrImage
    .imageSync(random.seed, {
      type: 'svg',
      ec_level: options.get('correctionLevel'),
      margin: 0,
    })
    .toString();

  if (options.has('color')) {
    svg = svg.replace('<path ', `<path fill="${options.get('color')}" `);
  }

  return svg;
}
