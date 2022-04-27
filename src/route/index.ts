import * as express from "express"
const route = express.Router();
import { serviceLocate } from '../config/di'; 

const ClientController = serviceLocate.get("clientController")

route.get(
    "/offers", 
    (req: express.Request, res: express.Response) => {
        ClientController.getOffers(req, res);
    }
);


route.post(
    "/makeOffer", 
    (req: express.Request, res: express.Response) => {
        ClientController.makeOffer(req, res);
    }
);





export default route;