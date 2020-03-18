import { Options as OptionsContainer } from '@dicebear/avatars';

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
