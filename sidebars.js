module.exports = {
  someSidebar: {
    Overview: [
        'overview/motivation',
        'overview/needs-assessment',
        'overview/evaluation',
    ],
    'User Guide': [
        'users/overview'
    ],

    'Developer Guide': [
        'developers/overview',
        'developers/tech-stack',
      {
        type: 'category',
        label: 'User Interface',
        items: [
          'developers/ui/overview',
        ],
      },
      {
        type: 'category',
        label: 'Scrapers',
        items: [
          'developers/scrapers/overview',
        ],
      },
    ],
    Documentation: [
        'documentation/manage-this-site',
        'documentation/write-markdown',
        'documentation/use-mdx',
    ],
    'About Us': [
        'about/team'
    ]
  },
};
