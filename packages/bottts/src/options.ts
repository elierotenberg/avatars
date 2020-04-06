import { Options as OptionsContainer } from '@avatars/core';

type Options = OptionsContainer<{
  colors?: string[];
  primaryColorLevel?: number;
  secondaryColorLevel?: number;
  colorful?: boolean;
  mouthChance?: number;
  sidesChance?: number;
  textureChance?: number;
  topChange?: number;
}>;

export default Options;
