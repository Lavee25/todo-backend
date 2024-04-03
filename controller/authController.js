
const jwt=require("jsonwebtoken");
const passwordHash =require('password-hash');
const User=require('../model/UserModel');
const userKey= process.env.USER_KEY;


class AuthController{
    constructor(){}

UserSignup=async(req,res)=>{
    try{
        const {id,username,password,age}=req.body;
        const user=await User.findOne({username:username});
        const hashpassword=passwordHash.generate(password);
        if(user) return res.status(401).send({message:'user already exist'});
        const data=new User({username,password:hashpassword,age,id});
        const savedata=await data.save();
        const userId=savedata._id;
        const token=jwt.sign({id:userId},userKey);    //{expiresIn:"10m"}
        const result = {user:savedata , "userToken":token}

    return res.status(200).send({message:"user signup sucessfully",data:result});
  
    }
    catch(error){
       return  res.status(400).send({message:"error",error:error.message})
    }
}

UserLogin=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username:username})
        if(!user) return res.status(401).send({message:'user not exist'});
        const validPassword=passwordHash.verify(password,user.password);
        if(!validPassword)return res.status(404).send("Invalid password");
        const UserId = user._id;
        const token = jwt.sign({id:UserId},userKey);//,{expiresIn:"10m"}
       const result = {user , "adminToken":token}
       return res.status(200).send({message:"admin login successfully",data:result})
       
  
    }
    catch(error){
       return  res.status(400).send({message:"error",error:error.message})
    }
}

}

const authController=new AuthController();
module.exports=authController;