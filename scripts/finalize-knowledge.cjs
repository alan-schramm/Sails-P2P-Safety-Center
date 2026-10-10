const fs = require('node:fs');
const path = require('node:path');
const {i18n, url, baseUrl} = require('../docusaurus.config');
const root = path.resolve(__dirname, '..');
// Each locale build copies the root static index over its localized index.
// Restore the source for that language after Docusaurus finishes all locales.
for (const locale of i18n.locales) {
 const relative = locale === i18n.defaultLocale ? '' : locale;
 for (const name of ['llms.txt', 'llms-full.txt']) {
  const source = path.join(root, 'static', relative, name);
  const destination = path.join(root, 'build', relative, name);
  fs.copyFileSync(source, destination);
  if (!fs.readFileSync(destination, 'utf8').startsWith('# Sails P2P Safety Center — ' + locale + '\n')) throw new Error('Incorrect AI index language: ' + locale);
 }
}
console.log('Localized AI indexes verified in production output.');

// Keep Docusaurus' individual maps and expose one discovery entry for all languages.
const sitemapUrls = i18n.locales.map(locale => url + baseUrl + (locale === i18n.defaultLocale ? '' : locale + '/') + 'sitemap.xml');
const sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + sitemapUrls.map(location => `  <sitemap><loc>${location}</loc></sitemap>`).join('\n') + '\n</sitemapindex>\n';
fs.writeFileSync(path.join(root, 'build/sitemap-index.xml'), sitemapIndex);
console.log('All language sitemaps linked from sitemap-index.xml.');
