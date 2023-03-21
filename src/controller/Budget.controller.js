import 'dotenv/config.js';
import { promisify } from "util";
import jwt from "jsonwebtoken";
import { createBudget,getBudgets,getBudgetById } from '../services/Budget.service.js';
import { getItems } from '../services/Item.service.js';

const postBudget = async (req,res) => {
    try {
        const authData = await promisify(jwt.verify)(req.token, process.env.JWT_SECRET_KEY);
        let budgetData = req.body
        const budget = await createBudget(budgetData.name,budgetData.description,authData.user.id) 
        res.status(200).json({message:budget})
    } catch (error) {
        res.status(498).json({message:"Bad Token"})
    }   
}

const getBudget = async(req,res) => {
    try {
        const authData = await promisify(jwt.verify)(req.token, process.env.JWT_SECRET_KEY);
        const budgetList = await getBudgets(authData.user.id)
        res.status(200).json({budget: budgetList})
    } catch (error) {
        res.status(404).json({message:"List not found"})
    }
}

const getBudgetId = async (req,res) => {
    try {
        const authData = await promisify(jwt.verify)(req.token, process.env.JWT_SECRET_KEY);
        const budget = await getBudgetById(req.params.id);
        const items = await getItems(req.params.id)

        res.status(200).json({
            budget,
            items
        })
    } catch (error) {
        res.status(403).json({message:`An error has ocurred: ${error}`})
    }

}


export { postBudget, getBudget, getBudgetId }