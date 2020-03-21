// @ts-ignore
import { inner } from 'gridy-avatars/dist/avatars';
import type { Random, Options as OptionsContainer } from '@dicebear/avatars';

type Options = OptionsContainer<{
  colorful?: boolean;
}>;

export default function(random: Random, options: Options) {
  options.setDefaults({
    colorful: false
  }, false);

  let body = random.integer(0, 7);
  let bodyColor = random.integer(0, 7);

  let eyes = random.integer(0, 7);
  let eyesColor = random.integer(0, 7);

  let mouth = random.integer(0, 7);
  let mouthColor = options.get('colorful') ? random.integer(0, 7) : eyesColor;

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 24 24" version="1.1">',
    inner(`${body}${bodyColor}${eyes}${eyesColor}${mouth}${mouthColor}`),
    '</svg>'
  ].join('');
}
