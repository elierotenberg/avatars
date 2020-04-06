import Male from '@avatars/male';
import Female from '@avatars/female';
import type { Random, Options as OptionsContainer } from '@avatars/core';

type Options = OptionsContainer<{
  skinColors?: number[];
  mood?: Array<'happy' | 'sad' | 'surprised'>;
}>;

export default function (random: Random, options: Options) {
  if (random.bool(50)) {
    return Male(random, options);
  } else {
    return Female(random, options);
  }
}
