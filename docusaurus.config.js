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
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'pt-BR', locales: ['pt-BR']},
  presets: [['classic', {
    docs: {routeBasePath: 'guias', sidebarPath: './sidebars.js', editUrl: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center/edit/main/'},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    navbar: {title: 'Sails Safety Center', items: [
      {to: '/', label: 'Início', position: 'left'},
      {type: 'docSidebar', sidebarId: 'safetySidebar', position: 'left', label: 'Guias'},
      {href: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center', label: 'GitHub', position: 'right'}
    ]},
    footer: {style: 'dark', links: [
      {title: 'Segurança', items: [{label: 'Comece por aqui', to: '/guias/'}, {label: 'Pagamento a terceiros', to: '/guias/pagamentos/terceiros'}]},
      {title: 'Projeto', items: [{label: 'Código e contribuições', href: 'https://github.com/sails-protocol/Sails-P2P-Safety-Center'}]}
    ], copyright: 'Sails P2P Safety Center. Informação educativa, não garantia de liquidação.'},
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
  },
};
module.exports = config;
