const { PeerRPCClient }  = require('grenache-nodejs-http')
const Link = require('grenache-nodejs-link')
const PORT = process.env.PORT || 3001

const link = new Link({ grape: 'http://127.0.0.1:30001'})
link.start()    
const peer = new PeerRPCClient(link, {})
peer.init();


class ClientController {
    logger: any
    constructor(logger) {
        this.logger = logger
    }


    makeOffer(req: any,  res: any) {
      const offer = req.body;
      peer.request('rpc_test', { path: req.path, msg: offer }, { timeout: 10000 }, (err, data) => {
      if (err) {
        console.error(err)
        process.exit(-1)
      }
        res.status(200).json(data)
      })
    }


    getOffers(req: any, res: any) {
      peer.request('rpc_test', { path: req.path  }, { timeout: 10000 }, (err, data) => {
      if (err) {
        console.error(err)
        process.exit(-1)
      }
        res.status(200).json(data)
      })
    }
}

export default ClientController