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
        label: 'Installation',
        items: [
          'developers/installation/install-scrapers',
          'developers/installation/install-ui',
        ],
      },
      {
        type: 'category',
        label: 'Checklists',
        items: [
          'developers/checklists/overview',
          'developers/checklists/design-checklist',
          'developers/checklists/js-eslint-checklist',
          'developers/checklists/react-checklist',
          'developers/checklists/testing-checklist',
        ],
      },
      {
        type: 'category',
        label: 'Review',
        items: [
          'developers/review/overview',
          'developers/review/review-process',
        ],
      },
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
        'about/team',
        'about/spring-2021',
    ]
  },
};
