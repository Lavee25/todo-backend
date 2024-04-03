const jwt=require('jsonwebtoken');
const userkey = process.env.USER_SECRET_KEY






exports.userAuth= async(req, res, next)=> {
    try {
        const bearearToken = req.headers['authorization'];
        const splitToken = bearearToken.split(" ")
        const token = splitToken[1]
        if (!token) return res.status(401).json({ message: 'Please Provide token!' });    
        const decode = await jwt.verify(token,userkey)
        req.user = decode.id
        return next();
    }catch(error){
        console.log('error : ' , error)
        return res.status(401).json({ message: error.message});
    }
}