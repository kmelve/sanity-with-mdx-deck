export default {
  name: 'codesnippet',
  type: 'object',
  title: 'Code Snippet',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'code',
      // sanity install @sanity/code-input
      type: 'code'
    },
    {
      name: 'notes',
      type: 'text'
    },
    {
      name: 'numbers',
      type: 'boolean',
      title: 'Show line numbers'
    },
    {
      name: 'fullscreen',
      type: 'boolean',
      title: 'Show fullsscreen'
    }
    /* {
            name: 'steps',
            type: 'array',
            of: [
                { type: 'lines' },
                { type: 'ranges' },
                { type: 'tokens' }
            ]
        } */
  ]
}
