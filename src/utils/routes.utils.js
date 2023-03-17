// Authorization: Bearer <token>
function verifyToken (req,res, next) {
    const bearerHeader =  req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(" ")[1]
        req.token = token
        next();
    }else{
        res.sendStatus(403).json({ message:"There is no authorization field on Headers"})
    }
}

export { verifyToken };