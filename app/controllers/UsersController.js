import UsersModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";

export const Registration = async(req,res)=>{
	try {
		let reqBody = req.body;
		UsersModel.create(reqBody)
		return res.json({status:"success",message:"User Registration Successfully"})
	}catch(err){
		return res.json({status:"error",message:err.toString()})
	}

}

export const Login = async(req,res)=>{
	try{
		let reqBody = req.body;
		let data = await UsersModel.findOne(reqBody)
		if(data===null){
			return res.json({status:"error",message:"User does not exist"})
		}else {
			//Login Success Token Encode
			let token = TokenEncode(data['email'],data['_id'])
			return res.json({status:"success",Token:token, message:"User Login Successfully"})
		}

	}catch(err){
		return res.json({status:"error",message:err.toString()})
	}
}

export const ProfileDetails = async(req,res)=>{
	try{
		let user_id = req.headers['user_id'];
		let data = await UsersModel.findOne({"_id":user_id});
		return res.json({status:"success",message:"User ProfileDetails Successfully",data:data})
	}catch(err){
		return res.json({status:"error",message:err.toString()})
	}
}

export const UpdateProfile = async(req,res)=>{
	return res.status(200).send({status:"success",message:"Profile Update Successfully"})
}

export const EmailVerification = async(req,res)=>{
	return res.status(200).send({status:"success",message:"EmailVerification Successfully"})
}

export const CodeVerification = async(req,res)=>{
	return res.status(200).send({status:"success",message:"CodeVerification Successfully"})
}

export const ResetPassword = async(req,res)=>{
	return res.status(200).send({status:"success",message:"ResetPassword Successful"})
}


