export const CreateTask = async(req,res)=>{
	return res.status(201).send({status:"success",message:"CreateTask successful"})
}

export const UpdateTaskStatus = async(req,res)=>{
	return res.status(200).send({status:"success",message:"UpdateTaskStatus successful"})
}

export const TaskListByStatus = async(req,res)=>{
	return res.status(200).send({status:"success",message:"TaskListByStatus successful"})
}

export const DeleteTask = async(req,res)=>{
	return res.status(200).send({status:"success",message:"DeleteTask successful"})
}

export const CountTask = async(req,res)=>{
	return res.status(200).send({status:"success",message:"CountTask successful"})
}
