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
      {
        type: 'category',
        label: 'User Interface',
        items: [
          'developers/ui/overview',
          'developers/ui/installation',
          'developers/ui/running',
          'developers/ui/deploying',
        ],
      },
      'developers/site-management',
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
    ],
    Documentation: [
      'documentation/manage-this-site',
      'documentation/write-markdown',
      'documentation/use-mdx',
    ],
    'About Us': [
      'about/team',
      'about/spring-2021',
      'about/pilot-study-dec-2020',
      'about/pilot-study-may-2021',
    ]
  },
};
