import type { Random } from '@dicebear/avatars';
import type Options from '../options';

export default function(options: Options, random: Random) {
  let mouthType = [];

  if (options.includes('mouth', 'concerned')) {
    mouthType.push('Concerned');
  }

  if (options.includes('mouth', 'default')) {
    mouthType.push('Default');
  }

  if (options.includes('mouth', 'disbelief')) {
    mouthType.push('Disbelief');
  }

  if (options.includes('mouth', 'eating')) {
    mouthType.push('Eating');
  }

  if (options.includes('mouth', 'grimace')) {
    mouthType.push('Grimace');
  }

  if (options.includes('mouth', 'sad')) {
    mouthType.push('Sad');
  }

  if (options.includes('mouth', 'scream')) {
    mouthType.push('ScreamOpen');
  }

  if (options.includes('mouth', 'serious')) {
    mouthType.push('Serious');
  }

  if (options.includes('mouth', 'smile')) {
    mouthType.push('Smile');
  }

  if (options.includes('mouth', 'tongue')) {
    mouthType.push('Tongue');
  }

  if (options.includes('mouth', 'twinkle')) {
    mouthType.push('Twinkle');
  }

  if (options.includes('mouth', 'vomit')) {
    mouthType.push('Vomit');
  }

  return random.pickone(mouthType);
}
