import Male from '@dicebear/avatars-male-sprites';
import Female from '@dicebear/avatars-female-sprites';
import type { Random, Options as OptionsContainer } from '@dicebear/avatars';

type Options = OptionsContainer<{
  mood?: Array<'happy' | 'sad' | 'surprised'>;
}>;

export default function(random: Random, options: Options) {
  if (random.bool(50)) {
    return Male(random, options);
  } else {
    return Female(random, options);
  }
}
