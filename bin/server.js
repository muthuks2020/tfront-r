import http from 'http'
import express from 'express'
import httpProxy from 'http-proxy'
import path from 'path'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import webpackConfig from '../webpack/common.config'
import morgan from 'morgan'

const proxy = httpProxy.createProxyServer({})
const app = express()

app.use(morgan('short'))

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    disableHostCheck: true
}).listen(3000, '0.0.0.0', err => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at localhost:3000')
})
    // const webpack = require('webpack')
    // const webpackConfig = require('./webpack/common.config')

    // const compiler = webpack(webpackConfig)

    // app.use(require('webpack-dev-middleware')(compiler, {
    //     noInfo: true, publicPath: webpackConfig.output.publicPath,
    //     hot: true,
    //     historyApiFallback: true,
    // }))

    // app.use(require('webpack-hot-middleware')(compiler, {
    //     log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    // }))

    // app.use(express.static(path.join(__dirname, '/')))

// app.all(/^\/api\/(.*)/, (req, res) => {
//     proxy.web(req, res, { target: 'http://localhost:5000' })
// })

// app.get(/.*/, (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })

// app.use('/', function(req, res) {
//   res.sendFile(path.join(__dirname+'/index.html'))
// })

// const server = http.createServer(app)
// server.listen(process.env.PORT || 3000, () => {
//     const address = server.address()
//     console.log('Listening on: %j', address)
//     console.log(' -> that probably means: http://localhost:%d', address.port)
// })
