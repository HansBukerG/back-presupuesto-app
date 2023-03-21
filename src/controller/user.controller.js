import 'dotenv/config.js';
import { promisify } from "util";
import jwt from "jsonwebtoken";
import { createUser,loginCheck,userCheck } from "../services/User.service.js";

const register = async(req,res) => {
    try{
        const data = req.body;
        let checkValue = await userCheck(data.email)
        if( checkValue == true ) {
            res.status(409).json({ message: "User already exists in the database" })
        }else{
            const newUser = await createUser(data.name, data.lastName, data.email, data.password)
            res.status(202).json({ message: "User has been created Succesfully!" })
        }
    }catch(error){
        res.status(503).json({ message: `Error in register() Call` })
    }
}

const login = async(req,res) => {
    try {
        const loginData = req.body;
        let userData = await loginCheck(loginData.email,loginData.password)
        if( userData === null ){
            res.status(401).json({ message: "User/Password incorrect, try again" })
        }else{
            const token = await promisify(jwt.sign)({user: userData}, process.env.JWT_SECRET_KEY, {expiresIn: '2h'});
            res.status(202).json({token: token});
        }
    } catch (error) {
        res.sendStatus(503)
    }
}


export { register, login };