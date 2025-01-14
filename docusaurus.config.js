module.exports = {
    title: 'Intersect Product Committee',
    tagline: 'Innovating Cardano',
    url: 'https://product.cardano.intersectmbo.org',
    baseUrl: '/',
    favicon: 'img/favicon.png',
    organizationName: 'IntersectMBO', // Usually your GitHub org/user name.
    projectName: 'product-website', // Usually your repo name.
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
                { to: 'about', label: 'About Us', position: 'left' },
                { to: 'vision-roadmap-2025', label: '2025 Vision/Roadmap', position: 'left' },
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
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/hfco/docs/tree/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
