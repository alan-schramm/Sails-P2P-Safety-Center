// @ts-check
const config = {
  title: 'Sails P2P Safety Center',
  tagline: 'Practical guidance for safer peer-to-peer trading',
  favicon: 'img/favicon.svg',
  url: 'https://example.com', // Replace before publishing
  baseUrl: '/',
  organizationName: 'alan-schramm',
  projectName: 'Sails-P2P-Safety-Center',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'pt-BR', locales: ['pt-BR']},
  presets: [['classic', {docs: {routeBasePath: '/', sidebarPath: './sidebars.js'}, blog: false, theme: {customCss: './src/css/custom.css'}}]],
  themeConfig: {
    navbar: {title: 'Sails P2P Safety Center', items: [{type: 'docSidebar', sidebarId: 'safetySidebar', position: 'left', label: 'Guias'}, {href: 'https://github.com/alan-schramm/Sails-P2P-Safety-Center', label: 'GitHub', position: 'right'}]},
    footer: {style: 'dark', copyright: 'Sails P2P Safety Center. Educational guidance, not a guarantee of payment finality.'},
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
  },
};
module.exports = config;
