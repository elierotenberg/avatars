import { ColorCollection, Color } from '@dicebear/avatars/lib/types';
import { AvatarsOptions } from '@dicebear/avatars';
import OptionsContainer from '@dicebear/avatars/lib/options';

type Options = OptionsContainer<
  AvatarsOptions & {
    colors?: Array<keyof ColorCollection>;
    primaryColorLevel?: keyof Color;
    secondaryColorLevel?: keyof Color;
    colorful?: boolean;
    mouthChance?: number;
    sidesChance?: number;
    textureChance?: number;
    topChange?: number;
  }
>;

export default Options;
