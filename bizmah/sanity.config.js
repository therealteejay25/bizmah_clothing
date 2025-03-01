import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import product from './schemaTypes/product'
import banner from './schemaTypes/banner'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'w0d1l1o9',
  dataset: 'bizmah',

  plugins: [deskTool()],

  schema: {
    types: [product, banner],
  },
})
