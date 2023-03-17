import { Router } from "express";
import { register,login } from "../controller/user.controller.js";

const RouterUser = Router();

RouterUser.post('/login/register', register);
RouterUser.get('/login', login);

export {RouterUser}