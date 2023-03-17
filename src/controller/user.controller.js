import { createUser,userCheck } from "../services/User.service.js";

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

}


export { register };