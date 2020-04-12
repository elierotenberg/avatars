const { fs, path } = require('@vuepress/shared-utils');

const avatarStyles = fs
  .readdirSync(path.resolve(__dirname, '../guide/styles'))
  .map(filename => 'styles/' + filename.slice(0, -3))
  .sort();

module.exports = ctx => ({
  lang: 'en-US',
  title: 'DiceBear Avatars',
  description: 'Avatar Placeholder Library',
  themeConfig: {
    repo: 'dicebear/avatars',
    editLinks: true,
    docsDir: 'packages/docs',
    smoothScroll: true,
    nav: [{ text: 'Guide', link: '/guide/' }],
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'installation', 'usage']
        },
        {
          title: 'Official Styles',
          collapsable: false,
          children: avatarStyles
        }
      ]
    }
  }
});
