import { Router } from "express";
import { postBudget,getBudget } from "../controller/Budget.controller.js";
import { verifyToken } from "../utils/routes.utils.js";

const routerBudget = new Router()

routerBudget.post('/budget/create', verifyToken, postBudget);
routerBudget.get('/budget/get', verifyToken, getBudget);


export{ routerBudget }

