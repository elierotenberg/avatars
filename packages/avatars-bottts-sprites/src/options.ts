import type { DefaultOptions } from '@dicebear/avatars';
import { Options as OptionsContainer } from '@dicebear/avatars';

type Options = OptionsContainer<
DefaultOptions & {
    colors?: string[];
    primaryColorLevel?: number;
    secondaryColorLevel?: number;
    colorful?: boolean;
    mouthChance?: number;
    sidesChance?: number;
    textureChance?: number;
    topChange?: number;
  }
>;

export default Options;
