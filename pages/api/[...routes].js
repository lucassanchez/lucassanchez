// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const routes = (req, res) => {
  const { routes: [ path ] } = req.query

  // const loadContentFolder = 

  const content = hasContent();

  res.statusCode = 200

  console.log('routes', routes)
  if (routes.length === 1) {
    res.json({
      path
    })
  }

  if (routes.length === 2) {
    res.json({
      path: routes[0],
      slug: routes[1]
    })
  }

  if (routes.length > 2) {
    const fileName = routes[routes.length-1]
    routes.pop()
    res.json({
      path: routes.join('/'),
      slug: fileName
    })
  }
}

export default routes 