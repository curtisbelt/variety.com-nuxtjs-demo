import qs from 'qs'
import get from 'lodash/get'
export default {
  functional: true,
  name: 'AppLink',
  props: {
    to: {
      type: [String, Object],
      required: false
    },
    target: {
      type: String,
      required: false
    },
    rel: {
      type: String,
      required: false
    },
    query: {
      type: Object,
      required: false
    },
    tag: {
      type: String,
      default: ''
    }
  },
  render(createElement, context) {
    const linkAttributes = (function() {
      let url = get(context.props, 'to', null)
      if (typeof url === 'object') {
        url = get(context.props, 'to.path', '')
      }
      /**
       * * Handle empty URLs
       */
      if (url === null || url.length === 0) {
        return {
          is: 'span',
          to: ''
        }
      }

      /**
       * Fix absolute URLs which really should have been relative
       * Example: "http://stamford.localhost/home" -> "/home"
       */
      const hostUrl = 'vanilla.localhost'
      const indexOfHost = url.indexOf('//' + hostUrl)
      if (indexOfHost !== -1) {
        url = url.substring(indexOfHost + 2 + hostUrl.length)
      }

      /**
       * * Handle relative URLs
       */
      const matchRelativeUrl = url.match(/^\/.*/)
      const isRelativeUrl = matchRelativeUrl !== null

      if (isRelativeUrl) {
        const matchLangPrefix = url.match(/(?:^\/)([a-z]{2})(?:\/|$)/) // Match urls like "/de", "/de/about"
        const hasLangPrefix = matchLangPrefix !== null

        // * If lang prefix isn't specified, then add the prefix we are already routing with (if any)
        if (!hasLangPrefix) {
          const currentlyRoutedLang = get(
            context.parent.$route,
            'params.lang',
            ''
          )
          if (currentlyRoutedLang.length > 0) {
            url = '/' + currentlyRoutedLang + url
          }
        }

        // * If lang prefix exists but it's English, then force no prefix.
        // ! Note that switching TO English will require explicitly setting "/en/", otherwise it's indistinguishable from regular relative URLs that need to be dynamically prefixed.
        if (hasLangPrefix && matchLangPrefix[1] === 'en') {
          url = url.substring(3)

          // Edge-case: If URL is "/en", url would be empty, which will keep us on the same page instead of taking us to '/'.
          if (url.length === 0) {
            url = '/'
          }
        }

        // Stringify query prop into URL params
        if (context.props.query) {
          url = url + '?' + qs.stringify(context.props.query)
        }

        /**
         * If `to` prop is an object, it's because it used the `{path: '', query:{}}` syntax.
         * Checking for that here and restoring the query object if needed.
         * * Only used in the return for NuxtLink
         */
        let to
        if (typeof get(context.props, 'to') === 'object') {
          to = {
            path: url,
            query: JSON.parse(JSON.stringify(get(context.props, 'to.query')))
          }
        } else {
          to = url
        }

        // 🎉
        return {
          is: 'NuxtLink',
          to,
          tag: context.props.tag || 'a',
          target: context.props.target,
          rel: context.props.rel,
          ...(url === '/' && { exact: true })
        }

        /**
         * * Handle absolute URLs
         */
      } else {
        return {
          is: 'a',
          href: url,
          target: context.props.target || '_blank',
          rel: context.props.rel || 'noopener noreferrer'
        }
      }
    })()

    return createElement(
      linkAttributes.is,
      {
        ...context.data,
        props: linkAttributes,
        attrs: linkAttributes
      },
      context.slots().default
    )
  }
}
