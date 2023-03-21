import { Router } from "express";
import { postList } from "../controller/List.controller.js";
import { verifyToken } from "../utils/routes.utils.js";

const routerList = new Router();

routerList.post('/list/create', verifyToken, postList)


export { routerList }
