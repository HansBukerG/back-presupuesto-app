import 'dotenv/config.js';
import express from "express";
import cors from 'cors'
import { RouterUser } from './routes/routes.user.js';
import bodyParser  from 'body-parser'

const AppInit = () =>{
    const app = express()
    console.log('app init');
    app.use(cors())
    app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())
    app.use( RouterUser )
    const port = process.env.HTTP_PORT || 3001;
    app.listen(port, () => console.log(`Rest ready to listen in port: ${port}`))
}
export { AppInit } ;
