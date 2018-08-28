export default {
  name: 'deck',
  type: 'document',
  title: 'deck',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'slides',
      of: [{ type: 'slide' }]
    },
    {
      name: 'theme',
      title: 'Select theme',
      type: 'string',
      options: {
        list: [
          { title: 'Big', value: 'big' },
          { title: 'Book', value: 'book' },
          { title: 'Code', value: 'code' },
          { title: 'Comic', value: 'comic' },
          { title: 'Condensed', value: 'condensed' },
          { title: 'Dark', value: 'dark' },
          { title: 'Future', value: 'future' },
          { title: 'Hack', value: 'hack' },
          { title: 'Notes', value: 'notes' },
          { title: 'Script', value: 'script' },
          { title: 'Swiss', value: 'swiss' },
          { title: 'Yellow', value: 'yellow' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
