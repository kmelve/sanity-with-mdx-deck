export default {
  name: 'slide',
  type: 'object',
  title: 'slide',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Used for internal mnemonics'
    },
    {
      name: 'content',
      type: 'array',
      title: 'content',
      of: [
        {
          type: 'block'
        },
        {
          type: 'codesnippet'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'note',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'invert',
      description: 'Invert slide color',
      type: 'boolean'
    },
    {
      name: 'split',
      description: 'Split first item and the rest',
      type: 'boolean'
    }
  ]
}
