const jwt = require('jsonwebtoken')
const auth = (req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Please Provide the Token'})
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(err){
        res.status(401).json({message:'Token Not Valid'})
    }
}
const adminAuth = (req,res,next)=>{
    if(req.user.role !=='admin'){
        return res.status(403).json({message:'unAuthorized Access'})
    }
    next();
}

module.exports = {auth,adminAuth}
