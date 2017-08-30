const Vue = require('vue')
const server = require('express')()
// const renderer = require('vue-server-renderer').createRenderer()
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // recommended
    template, // (optional) page template
    clientManifest // (optional) client build manifest
})

server.get('*', (req, res) => {

  const context = { url: req.url }
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  renderer.renderToString(context, (err, html) => {
      // handle error...
      res.end(html)
  })
})

server.listen(3000)
