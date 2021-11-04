module.exports = {
  title: 'InternAloha',
  tagline: 'Serving internships to Hawaii CS students with aloha since 2020',
  url: 'https://internaloha.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'internaloha', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: { title: 'InternAloha', logo: { alt: 'InternAloha Logo', src: 'img/internaloha-logo.png', },
      items: [
        { to: 'docs/overview/motivation', activeBasePath: 'docs', label: 'Documentation', position: 'right', },
        { href: 'https://github.com/internaloha', label: 'GitHub', position: 'right', },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `InternAloha is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a><br/>
                  with funding from the National Science Foundation (Awards 1829542, 2025112)`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
