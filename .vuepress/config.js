module.exports = {
  title: 'Sustainability in Film - Podcast',
  description: 'Instructions on how to participate in our podcast.',
  base: '/podcast/',
  themeConfig: {
    nav: [
      { text: 'Website', link: 'https://filmmakersforfuture.org' }
    ],
    sidebar: [
      '/',
      {
        title: 'Requirements',
        collapsable: false,
        children: [
          'requirements/hardware',
          'requirements/internet',
          'requirements/software',
        ]
      },
      {
        title: 'Configuration',
        collapsable: false,
        children: [
          'configuration/audiodevice',
          'configuration/studiolink',
          'configuration/call',
          'configuration/backup',
        ]
      },
      {
        title: 'Mobile Recording',
        collapsable: true,
        children: [
          'mobile/app',
          'mobile/configuration',
          'mobile/call',
          'mobile/backup',
        ]
      },
    ],
    docsRepo: 'filmmakers4future/Podcast-Documentation',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Updated'
  },
  markdown: {
    toc: { includeLevel: [2, 3, 4] }
  },
  locales: {
    '/': {
      lang: 'en'
    }
  },
  plugins: [

  ]
}