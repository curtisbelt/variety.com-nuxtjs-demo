// Globally register all base components for convenience, because they
// will be used very frequently.

import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the atoms folder
  '@/components/atoms',
  // Do not look in subdirectories
  false,
  // Only include "A" prefixed .vue files
  /A[\w-]+\.(vue|js)$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)

  // Get the component name
  const componentName = fileName.replace(/^.+\/(.*)\.\w+$/, '$1')

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
