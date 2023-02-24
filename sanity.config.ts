import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  basePath: '/studio',
  name: 'Rroshi_Store_Content_Studio',
  title: 'Rroshi Store Content Studio',
  projectId: 'r5zbjv2s',
  dataset: 'product',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
