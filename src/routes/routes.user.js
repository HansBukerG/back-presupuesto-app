import { Router } from "express";
import { register } from "../controller/user.controller.js";

const RouterUser = Router();

RouterUser.get('/register', register);

export {RouterUser}