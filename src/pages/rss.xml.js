import rss from '@astrojs/rss';

export const get = () => rss({
 
  title: 'Astro Blog RSS Feed',
  
  description: 'Astro like a King',
  
  site: 'https://astroblog500.netlify.app',
  
  items: import.meta.glob('./blog/**/*.md'),
  
  customData: `<language>en-us</language>`,
});