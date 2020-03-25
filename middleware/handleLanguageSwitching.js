import get from 'lodash/get'

export default function ({ from, route, redirect }) {
  /**
   * Strip default language `/en` from path and redirect
   */

  if (route.path.match(/^\/en/) !== null) {
    return redirect(301, {
      path: route.path.substring(3) || '/',
      query: route.query,
    })
  }

  /**
   * If language has changed, refresh theme options (which includes setting currentLanguage).
   */
  if (process.client) {
    const lang = get(route, 'params.lang', 'en')
    const previousLang = get(from, 'params.lang', 'en')

    if (lang !== previousLang) {
      // TODO: refresh all graphql queries? specific ones?
    }
  }
}
