module.exports = {
    title: 'Intersect Product Committee',
    tagline: 'Innovating Cardano',
    url: 'https://product.cardano.intersectmbo.org',
    baseUrl: '/',
    favicon: 'img/favicon.png',
    organizationName: 'IntersectMBO', // Usually your GitHub org/user name.
    projectName: 'product-website', // Usually your repo name.
    staticDirectories: ['static'],
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap',
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Intersect Product Committee',
            items: [
                { to: 'workshops', label: 'Workshops', position: 'left' },
                { to: 'vision', label: 'Vision', position: 'left' },
                {
                  href: "https://github.com/IntersectMBO/product-website",
                  label: "GitHub",
                  position: "right",
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Intersect Product Committee. Built with Docusaurus`,
        },
    },
    plugins: [
      'docusaurus-plugin-sass'
  ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/hfco/docs/tree/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};
