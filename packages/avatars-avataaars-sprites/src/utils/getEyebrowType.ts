import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let eyebrowType = [];

  if (options.includes('eyebrow', 'angry')) {
    eyebrowType.push('Angry', 'AngryNatural');
  }

  if (options.includes('eyebrow', 'default')) {
    eyebrowType.push('Default', 'DefaultNatural');
  }

  if (options.includes('eyebrow', 'flat')) {
    eyebrowType.push('FlatNatural');
  }

  if (options.includes('eyebrow', 'raised')) {
    eyebrowType.push('RaisedExcited', 'RaisedExcitedNatural');
  }

  if (options.includes('eyebrow', 'sad')) {
    eyebrowType.push('SadConcerned', 'SadConcernedNatural');
  }

  if (options.includes('eyebrow', 'unibrow')) {
    eyebrowType.push('UnibrowNatural');
  }

  if (options.includes('eyebrow', 'up')) {
    eyebrowType.push('UpDown', 'UpDownNatural');
  }

  return random.pickone(eyebrowType);
}
