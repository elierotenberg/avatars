import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let topType = [];

  if (options.includes('top', 'longHair')) {
    topType.push(
      'LongHairBigHair',
      'LongHairBob',
      'LongHairBun',
      'LongHairCurly',
      'LongHairCurvy',
      'LongHairDreads',
      'LongHairFrida',
      'LongHairFro',
      'LongHairFroBand',
      'LongHairMiaWallace',
      'LongHairNotTooLong',
      'LongHairShavedSides',
      'LongHairStraight',
      'LongHairStraight2',
      'LongHairStraightStrand'
    );
  }

  if (options.includes('top', 'shortHair')) {
    topType.push(
      'ShortHairDreads01',
      'ShortHairDreads02',
      'ShortHairFrizzle',
      'ShortHairShaggy',
      'ShortHairShaggyMullet',
      'ShortHairShortCurly',
      'ShortHairShortFlat',
      'ShortHairShortRound',
      'ShortHairShortWaved',
      'ShortHairSides',
      'ShortHairTheCaesar',
      'ShortHairTheCaesarSidePart'
    );
  }

  if (options.includes('top', 'eyepatch')) {
    topType.push('Eyepatch');
  }

  if (options.includes('top', 'hat')) {
    topType.push('Hat', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4');
  }

  if (options.includes('top', 'hijab')) {
    topType.push('Hijab');
  }

  if (options.includes('top', 'turban')) {
    topType.push('Turban');
  }

  let pickedTopType = random.pickone(topType);

  if (false === random.bool(options.get('topChance', 100))) {
    return 'NoHair';
  }

  return pickedTopType;
}
