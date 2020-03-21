import type { Random, Options as OptionsContainer } from '@dicebear/avatars';
// @ts-ignore
import jdenticon from 'jdenticon';

type Options = OptionsContainer<{
  hues?: number[];
  colorLightness?: [number, number];
  grayscaleLightness?: [number, number];
  colorSaturation?: number;
  grayscaleSaturation?: number;
}>;

export default function(random: Random, options: Options) {
  options.setDefaults({
    hues: [],
    colorLightness: undefined,
    grayscaleLightness: undefined,
    colorSaturation: undefined,
    grayscaleSaturation: undefined
  }, false);

  jdenticon.config = {
    hues: options.get('hues'),
    lightness: {
      color: options.get('colorLightness'),
      grayscale: options.get('grayscaleLightness')
    },
    saturation: {
      color: options.get('colorSaturation'),
      grayscale: options.get('grayscaleSaturation')
    }
  };

  return jdenticon
    .toSvg(random.seed, 50, 0)
    .replace('width="50"', '')
    .replace('height="50"', '');
}
