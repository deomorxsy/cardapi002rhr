/**
 * Required External Modules
 */


import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";


// wiring the controllers
import { itemsRouter } from "./items/items.router";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/** App Configuration **/

app.use(helmet());
app.use(cors());
app.use(express.json());
// leverages the router
app.use("/api/menu/items", itemsRouter);

/** Debugging purposes **/

app.use(bodyParser.json());

app.post('/api/menu/items', (req, res) => {
    const data = req.body;
    console.log(data);
    // process the data
    res.send('OK');
})

console.log(data);

/** Server Activation **/

app.listen(PORT, () => {
    console.log(`\n====================================\n\nContainer port: ${PORT}\n|> not sure which port is mapped on host?\n|> check podman-port command.\n\n|> check at http://localhost:${PORT}/api/menu/items/\n\n====================================`)
})
