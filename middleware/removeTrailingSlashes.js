export default function({ route, redirect }) {
  if (route.path !== '/' && route.path.slice(-1) === '/') {
    return redirect(301, { path: route.path.slice(0, -1), query: route.query })
  }
}
