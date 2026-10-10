// @ts-check
const config = {
  title: 'Sails P2P Safety Center',
  tagline: 'Safer peer-to-peer trading starts with better information',
  favicon: 'img/favicon.svg',
  url: 'https://sails-protocol.github.io',
  baseUrl: '/Sails-P2P-Safety-Center/',
  organizationName: 'sails-protocol',
  projectName: 'Sails-P2P-Safety-Center',
  trailingSlash: false,
  metadata: [
    {name: 'robots', content: 'index, follow, max-snippet:-1'},
    {name: 'author', content: 'Sails Protocol'},
    {name: 'description', content: 'Open educational safety guides for peer-to-peer trading, payments, escrow, identity, and disputes.'}
  ],
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en', 'pt-BR', 'es'], localeConfigs: {en: {label: 'English'}, 'pt-BR': {label: 'Português'}, es: {label: 'Español'}}},
  presets: [['classic', {
    docs: {routeBasePath: 'guides', sidebarPath: './sidebars.js', editUrl: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center/edit/main/'},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    navbar: {title: 'Sails Safety Center', items: [
      {to: '/', label: 'Home', position: 'left'},
      {type: 'docSidebar', sidebarId: 'safetySidebar', position: 'left', label: 'Guides'},
      {type: 'localeDropdown', position: 'right'},
      {href: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center', label: 'GitHub', position: 'right'}
    ]},
    footer: {style: 'dark', links: [
      {title: 'Safety', items: [{label: 'Start here', to: '/guides/'}, {label: 'Third-party payments', to: '/guides/pagamentos/terceiros'}]},
      {title: 'Project', items: [{label: 'Code and contributions', href: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center'}]}
    ], copyright: `© ${new Date().getFullYear()} Sails Protocol. Educational content, not a settlement guarantee.`},
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
  },
};
module.exports = config;
