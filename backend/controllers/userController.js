import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

//token genrate
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


//function for user login
const loginUser=async(req,res)=>{
   try {
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({success:false,message:'all fields is required!'})
    }
    const user=await userModel.findOne({email})
    if(!user){
        return res.json({success:false,message:'User is not found!'})
    }
    const isMatched=await bcrypt.compare(password,user.password);
    if(!isMatched){
        return res.json({success:false,message:'Password are incorrect'})
    }
    const token=createToken(user._id);
    return res.json({success:true,token,message:'Login success'})
   } catch (error) {
      console.log(error)
      return res.json({success:false,message:error.message})
   }
}



//function for user register
const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.json({success:false,message:'all fields is required!'})
        }
        //check user already exist
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:'User already exist with this email!'})
        }
        //validate email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:'please Enter a valid email!'})
        }
        if(password.length < 8){
            return res.json({success:false,message:'please Enter a password minimum 8 length'})
        }
        //hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({name,email,password:hashedPassword});
        const user=await newUser.save();
        const token=createToken(user._id);
        return res.json({success:true,token,message:'user registered'})
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message})
    }
   
}



//admin login function
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(email ===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"wrong credentials"})
        }
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message})
    }
}

export {loginUser,registerUser,adminLogin}