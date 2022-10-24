// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'jharrison.io',
  tagline: 'Documenting personal development by capturing things I have learned.',
  url: 'https://jharrison.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jharrisonio', // Usually your GitHub org/user name.
  projectName: 'jharrisonio.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'solutions',
          routeBasePath: 'solutions',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jharrisonio/jharrisonio.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/jharrisonio/jharrisonio.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'James Harrison',
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/solutions', label: 'Solutions', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://medium.com/@jharrison.au', label: 'Articles', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/jharrisonio/jharrisonio.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} James Harrison.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
