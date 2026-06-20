const User = require ("../models/userModel")

const registrationcontroller = async (req,res) =>{
    const {username,email,password} = req.body

    let existingUser = await User.findOne({email:email})
    if(existingUser){
      return res.send("User Already Exist")
    }

     const user = await new User ({
      username : username,
      email : email,
      password : password,
     })

     res.send(user)
     user.save()
    
    
}

const allUserController =async (req,res) =>{
   let data = await User.find({})
  res.send (data)
   
}

const deleteUser = async (req,res) =>{
const {id} = req.params
await User.findByIdAndDelete(id)
res.send ("User Deleted")
}


const updateUser = async (req,res) =>{
  const {id} = req.params
  let data =  await User.findByIdAndUpdate({_id:id}, req.body) 
  res.send (data)
}

module.exports = {registrationcontroller, allUserController, deleteUser, updateUser}