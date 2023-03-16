'use strict'

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const PORT = 3000
const HOST = 'localhost'

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST
  })

  server.route(routes)

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()