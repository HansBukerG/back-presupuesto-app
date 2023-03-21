import jwt from "jsonwebtoken";
import { promisify } from "util";
import { loginCheck } from "../services/User.service.js";

// Authorization: Bearer <token>
async function verifyToken (req,res, next) {
    const bearerHeader =  req.headers['authorization']
    let token;
    if (typeof bearerHeader === 'undefined') {
        return res.status(403).json({message: 'Missing authorization on Headers'})
    }

    if (bearerHeader.split(" ").length != 2) {
        return res.status(403).json({message: 'Incorrect authorization format'})
    }

    token = bearerHeader.split(" ")[1]
    req.token = token

    if (await !verifyUser(token)) {
        return res.status(403).json({ message: 'Incorrect user data inside token' });
    }
    next();
}

async function verifyUser(token) {
    try {
        const authData = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
        const loginData = await loginCheck(authData.user.email, authData.user.password)
        return loginData !== null;
    } catch (error) {
        return false;
    }
}

export { verifyToken };