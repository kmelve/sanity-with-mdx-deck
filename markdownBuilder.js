const toMarkdown = require('@sanity/block-content-to-markdown')
const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')
const del = require('del')

const fs = require('fs')
const urlFor = source => imageUrlBuilder(sanityClient).image(source)
const { projectId, dataset, deckId } = require('./sanityConfig.json')
const { log } = console
if (!projectId || !dataset) {
  console.log(`
# Missing Sanity configuration
projectID: ${projectId || 'No project id'}\n
dataset: ${dataset || 'No dataset name'}
`)
  process.exit(0)
}
const client = sanityClient({
  projectId,
  dataset,
  useCdn: false
})
const generateCodeSurfer = ({
  title = '&nbsp;',
  notes = '-',
  _key,
  numbers
}) => `
<CodeSurfer
  title="${title}"
  notes="${notes}"
  code={require("!raw-loader!./tmp/${_key}.mdx-code")}
  ${numbers ? 'showNumbers' : 'showNumbers={false}'}
  dark={false}
/>
`

const serializers = {
  types: {
    slide: () => 'Slide',
    codesnippet: ({ node = {} }) => {
      const { _key, code = {} } = node
      fs.writeFileSync(`./tmp/${_key}.mdx-code`, code.code)
      return generateCodeSurfer(node)
    }
  }
}

function getData () {
  return client
    .fetch('*[_id == $deckId][0]', { deckId })
    .catch(error => log(`# ${error}`))
}
async function parseToMarkdown (data) {
  const { title, slides, theme = 'default' } = data
  log(`
import { Head, Notes } from 'mdx-deck'
import { CodeSurfer } from 'mdx-deck-code-surfer'
import { Invert, Split, FullScreenCode } from 'mdx-deck/layouts'
export { ${theme} as theme } from './theme'
\n
<Head>
  <title>${title}</title>
</Head>
    `)
  slides.forEach((slide, i) => {
    if (i > 0) log('\n---\n')
    if (slide.invert) log('export default Invert\n')
    if (slide.split) log('export default Split\n')
    log(toMarkdown(slide.content, { serializers, projectId, dataset }))
    if (slide.note) {
      log('\n<Notes>')
      log(toMarkdown(slide.note, { serializers, projectId, dataset }))
      log('</Notes>\n')
    }
  })
}
function cleanup () {
  del(['tmp/*.mdx-code', 'dist/*', '!dist/.gitkeep'])
}
;(async () => {
  await cleanup()
  const data = await getData()
  await parseToMarkdown(data)
})()
