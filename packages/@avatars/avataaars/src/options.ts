import type { Options as OptionsContainer } from '@avatars/core';

type Options = OptionsContainer<{
    style?: 'transparent' | 'circle';
    top?: Array<'longHair' | 'shortHair' | 'eyepatch' | 'hat' | 'hijab' | 'turban' | string>;
    topChance?: 100;
    hatColor?: Array<'black' | 'blue' | 'gray' | 'heather' | 'pastel' | 'pink' | 'red' | 'white' | string>;
    hairColor?: Array<'auburn' | 'black' | 'blonde' | 'brown' | 'pastel' | 'platinum' | 'red' | 'gray' | string>;
    accessories?: Array<'kurt' | 'prescription01' | 'prescription02' | 'round' | 'sunglasses' | 'wayfarers' | string>;
    accessoriesChance?: number;
    facialHair?: Array<'medium' | 'light' | 'majestic' | 'fancy' | 'magnum' | string>;
    facialHairChance?: number;
    facialHairColor?: Array<'auburn' | 'black' | 'blonde' | 'brown' | 'platinum' | 'red' | string>;
    clothes?: Array<'blazer' | 'sweater' | 'shirt' | 'hoodie' | 'overall' | string>;
    clothesColor?: Array<'black' | 'blue' | 'gray' | 'heather' | 'pastel' | 'pink' | 'red' | 'white' | string>;
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
        | string
    >;
    eyebrow?: Array<'angry' | 'default' | 'flat' | 'raised' | 'sad' | 'unibrow' | 'up' | string>;
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
        | string
    >;
    skin?: Array<'tanned' | 'yellow' | 'pale' | 'light' | 'brown' | 'darkBrown' | 'black' | string>;
}>;

export default Options;
