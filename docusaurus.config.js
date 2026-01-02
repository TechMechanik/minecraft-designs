/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TechMechanik Minecraft",
  tagline: "Guides, builds, and runbooks",
  favicon: 'img/favicon.ico',

  // GitHub Pages
  url: "https://techmechanik.github.io",
  baseUrl: "/minecraft-designs/",
  organizationName: "TechMechanik",
  projectName: "minecraft-designs",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/TechMechanik/minecraft/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Minecraft",
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/TechMechanik/minecraft',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/getting-started/overview' },
            { label: 'ATM10', to: '/atm10' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Issues', href: 'https://github.com/TechMechanik/minecraft/issues' },
            { label: 'Discussions', href: 'https://github.com/TechMechanik/minecraft/discussions' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TechMechanik. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'powershell', 'yaml'],
    },
  },
};

module.exports = config;
