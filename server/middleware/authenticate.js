//Authenticate is the middle ware here .
//it will checked before the response .

const USers = require('../models/userSchema');

const authenticate=(req,res)=> {
    try{
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("no token");
        }else{
            const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
            const rootUse = await Users.findOne({_id : verifyToken._id,"tokens.token":token});

            if(!rootUser){
                res.status(401).send("User not found")
            }else{
                res.status(200).send("Authorized User")
            }
        }
        next()
    }catch (error){
        res.status(401).send("Error")
        console.log(error)
    }
}
