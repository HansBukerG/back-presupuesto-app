import { loginCheck } from "../services/User.service";

// Authorization: Bearer <token>
async function verifyToken (req,res, next) {
    const bearerHeader =  req.headers['authorization']
    if (typeof bearerHeader === 'undefined') {
        return res.sendStatus(403).json({ message:"There is no authorization field on Headers" });
    }
    const token = bearerHeader.split(" ")[1]
    req.token = token
    const userCheck = await verifyUser(token)
    if ( userCheck == false) {
        return res.sendStatus(403).json({ message: 'Incorrect user data inside token' })
    } 
    
    next();
}

async function verifyUser(token) {
    try {
        const authData = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
        const loginData = await loginCheck(authData.user.email, authData.user.password)
        return logindata !== null;
    } catch (error) {
        return false;
    }
}

export { verifyToken };