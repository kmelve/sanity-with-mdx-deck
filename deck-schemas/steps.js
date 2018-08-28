const lines = {
  name: 'lines',
  type: 'array',
  of: [{ type: 'number' }]
}

const range = {
  name: 'range',
  type: 'array',
  of: [{ type: 'number' }]
}

const tokens = {
  name: 'tokens',
  type: 'object',
  fields: [
    {
      type: 'array',
      name: 'tokens',
      of: [{ type: 'number' }]
    },
    {
      type: 'string',
      name: 'notes'
    }
  ]
}
export default {
  lines,
  range,
  tokens
}
