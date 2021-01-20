export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6008322edcb7bc1163a4e694',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hvge91eu',
                  apiId: '825021d5-568a-4943-9fc2-e23bf5a7faf3'
                },
                {
                  buildHookId: '6008322e89df400ba115eba1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g4kjzy52',
                  apiId: '08010125-875f-4ee5-8cb1-622430bb2926'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SBdC/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g4kjzy52.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
