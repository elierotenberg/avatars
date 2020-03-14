import Random from '@dicebear/avatars/lib/random';
import Options from '../options';

export default function(options: Options, random: Random) {
  let eyeType = [];

  if (options.includes('eyes', 'close')) {
    eyeType.push('Close');
  }

  if (options.includes('eyes', 'cry')) {
    eyeType.push('Cry');
  }

  if (options.includes('eyes', 'default')) {
    eyeType.push('Default');
  }

  if (options.includes('eyes', 'dizzy')) {
    eyeType.push('Dizzy');
  }

  if (options.includes('eyes', 'roll')) {
    eyeType.push('EyeRoll');
  }

  if (options.includes('eyes', 'happy')) {
    eyeType.push('Happy');
  }

  if (options.includes('eyes', 'hearts')) {
    eyeType.push('Hearts');
  }

  if (options.includes('eyes', 'side')) {
    eyeType.push('Side');
  }

  if (options.includes('eyes', 'squint')) {
    eyeType.push('Squint');
  }

  if (options.includes('eyes', 'surprised')) {
    eyeType.push('Surprised');
  }

  if (options.includes('eyes', 'wink')) {
    eyeType.push('Wink');
  }

  if (options.includes('eyes', 'winkWacky')) {
    eyeType.push('WinkWacky');
  }

  return random.pickone(eyeType);
}
