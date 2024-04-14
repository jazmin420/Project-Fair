const jwt = require('jsonwebtoken')
//verify token 
const jwtMiddleware = (req,res,next)=>{
    console.log("Inside JWT Middleware!!!");
    try{
        const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if(token){
        const jwtResponse = jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    }else{
        res.status(406).json("Please Provide token !!!") 
    }
    }
    catch{
        res.status(401).json("Access denied... Please Login !!!")
    }
}

module.exports = jwtMiddleware