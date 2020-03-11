function createLanguageRoutes(routes, isRootLevel = true) {
  const languageRoutes = []

  routes.forEach((route) => {
    // TODO: check for trailing ID number for posts?

    languageRoutes.push({
      path: isRootLevel
        ? `/:lang([a-z]{2})${route.path}`.replace(/\/$/, '')
        : route.path,
      component: route.component,
      name: `lang-${route.name}`,
      ...(route.children && {
        children: createLanguageRoutes(route.children, false),
      }),
    })
  })

  return languageRoutes
}

export default {
  middleware: ['removeTrailingSlashes', 'handleLanguageSwitching'],

  extendRoutes(routes) {
    routes.push(...createLanguageRoutes(routes))

    // If a wildcard route exists, find and move it to the very end
    const wildcardIndex = routes.findIndex((route) => {
      return route.name === 'all'
    })
    routes.push(routes.splice(wildcardIndex, 1)[0])
  },
}
