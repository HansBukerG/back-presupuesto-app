import { Router } from "express";
import { postBudget,getBudget } from "../controller/Budget.controller.js";
import { getBudgetById } from "../services/Budget.service.js";
import { verifyToken } from "../utils/routes.utils.js";

const routerBudget = new Router()

routerBudget.post('/budget/create', verifyToken, postBudget);
routerBudget.get('/budget/get', verifyToken, getBudget);
routerBudget.get('/budget/get/:id', verifyToken, getBudgetById);


export{ routerBudget }

