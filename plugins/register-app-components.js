import Vue from 'vue'

const requireComponent = require.context(
  '@/components/shared/App',
  true,
  /App[\w-]+\.(vue|js)$/,
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^.+\/(.*)\.\w+$/, '$1')
  Vue.component(componentName, componentConfig.default || componentConfig)
})
