import appServer from './app';
// const { PeerRPCClient }  = require('grenache-nodejs-http')
// const Link = require('grenache-nodejs-link')
// const PORT = process.env.PORT || 3001


async function main() {
    appServer.listen(5000, () => console.log("Server started on port " + 5000))
} main();