/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/site-structure',
      ],
    },
    {
      type: 'category',
      label: 'ATM10',
      items: [
        'atm10/index',
        {
          type: 'category',
          label: 'Base Design',
          items: [
            'atm10/base-design/dome-concept',
            'atm10/base-design/chunk-alignment',
            'atm10/base-design/power-first-dome',
          ],
        },
        {
          type: 'category',
          label: 'Progression',
          items: [
            'atm10/progression/early',
            'atm10/progression/mid',
            'atm10/progression/late',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Systems',
      items: [
        'power/index',
        'logistics/index',
        'automation/index',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/commands',
        'reference/links',
        'reference/contributing',
      ],
    },
  ],
};

module.exports = sidebars;
