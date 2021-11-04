module.exports = {
  someSidebar: {
    Overview: [
      'overview/motivation',
      'overview/needs-assessment',
      'overview/evaluation',
    ],
    'Developer Guide': [
      'developers/overview',
      'developers/tech-stack',
      {
        type: 'category',
        label: 'Scrapers',
        items: [
          'developers/scrapers/overview',
          'developers/scrapers/installation',
          'developers/scrapers/running',
        ],
      },
    ],
    Documentation: [
      'documentation/manage-this-site',
      'documentation/write-markdown',
      'documentation/use-mdx',
    ],
    'Pilot Studies': [
      'about/pilot-study-dec-2020',
      'about/pilot-study-may-2021',
    ]
  },
};
