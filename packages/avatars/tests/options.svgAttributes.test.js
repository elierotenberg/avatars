const Avatars = require('../lib/index').default;
const Parser = require('../lib/parser').default;

const TestSpriteCollection = (random) => `<svg viewBox="0 0 20 20" class="base-class">${random.integer(0, 100)}</svg>`;

test('options.svgAttributes', () => {
  const avatars = new Avatars(TestSpriteCollection);
  const avatarWithoutCustomAttributes = avatars.create('test');
  const svgWithoutCustomAttributes = Parser.parse(avatarWithoutCustomAttributes);
  expect(svgWithoutCustomAttributes.attributes).toEqual({
    viewBox: '0 0 20 20',
    class: "base-class",
  });
  const avatarWithCustomAttributes = avatars.create('test', {
    svgAttributes: {
      class: (prev) => [prev ?? '', 'test-sprite-collection'].join(' '),
      id: 'test-sprite',
      ['data-seed']: 'test',
    },
  });
  const svgWithCustomAttributes = Parser.parse(avatarWithCustomAttributes);
  expect(svgWithCustomAttributes.attributes).toEqual({
    viewBox: '0 0 20 20',
    class: 'base-class test-sprite-collection',
    id: 'test-sprite',
    ['data-seed']: 'test',
  });
});
