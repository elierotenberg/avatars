import type { Options as OptionsContainer } from '@dicebear/avatars';

type Options = OptionsContainer<{
  style?: 'transparent' | 'circle';
  top?: Array<'longHair' | 'shortHair' | 'eyepatch' | 'hat' | 'hijab' | 'turban'>;
  topChance?: 100;
  hatColor?: Array<'black' | 'blue' | 'gray' | 'heather' | 'pastel' | 'pink' | 'red' | 'white'>;
  hairColor?: Array<'auburn' | 'black' | 'blonde' | 'brown' | 'pastel' | 'platinum' | 'red' | 'gray'>;
  accessories?: Array<'kurt' | 'prescription01' | 'prescription02' | 'round' | 'sunglasses' | 'wayfarers'>;
  accessoriesChance?: number;
  facialHair?: Array<'medium' | 'light' | 'majestic' | 'fancy' | 'magnum'>;
  facialHairChance?: number;
  facialHairColor?: Array<'auburn' | 'black' | 'blonde' | 'brown' | 'platinum' | 'red'>;
  clothes?: Array<'blazer' | 'sweater' | 'shirt' | 'hoodie' | 'overall'>;
  clothesColor?: Array<'black' | 'blue' | 'gray' | 'heather' | 'pastel' | 'pink' | 'red' | 'white'>;
  eyes?: Array<
    | 'close'
    | 'cry'
    | 'default'
    | 'dizzy'
    | 'roll'
    | 'happy'
    | 'hearts'
    | 'side'
    | 'squint'
    | 'surprised'
    | 'wink'
    | 'winkWacky'
  >;
  eyebrow?: Array<'angry' | 'default' | 'flat' | 'raised' | 'sad' | 'unibrow' | 'up'>;
  mouth?: Array<
    | 'concerned'
    | 'default'
    | 'disbelief'
    | 'eating'
    | 'grimace'
    | 'sad'
    | 'scream'
    | 'serious'
    | 'smile'
    | 'tongue'
    | 'twinkle'
    | 'vomit'
  >;
  skin?: Array<'tanned' | 'yellow' | 'pale' | 'light' | 'brown' | 'darkBrown' | 'black'>;
}>;

export default Options;
