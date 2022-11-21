import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'mutecipher | Cory Hutchison',
  description: 'A blog about software development, technology, and life.',
  site: 'https://mutecipher.com',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`
});
