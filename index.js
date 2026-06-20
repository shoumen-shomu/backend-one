require('node:dns').setServers(["1.1.1.1"],["8.8.8.8"])
const express = require("express")
const {registrationcontroller, allUserController ,deleteUser ,updateUser} = require("./controllers/registrationcontroller")
const securemiddleware = require("./middlewares/securemiddleware")
const app = express()
const mongoose = require ("mongoose")

app.use (express.json())

mongoose.connect ("mongodb+srv://shoumen:12345@cluster0.g4h3gtz.mongodb.net/todo?appName=Cluster0").then(() =>{
    console.log("Database Connect");
    
})


app.post ("/registration",registrationcontroller )
app.get ("/allusers", allUserController)
app.delete("/user/:id" , deleteUser)
app.post ("/user/:id" , updateUser)


app.listen(5000,()=>{
    console.log("Server is Running");
    
})
































// require('node:dns').setServers(["1.1.1.1"],["8.8.8.8"])
// const express = require ("express")
// const securemiddleware = require("./middlewares/securemiddleware")
// const registrationcontroller = require("./controllers/registrationcontroller")
// const app = express()
// const mongoose = require("mongoose")



// mongoose.connect("mongodb+srv://shoumen:12345@cluster0.g4h3gtz.mongodb.net/todo?appName=Cluster0").then(() =>{
//     console.log("Database Connected");
    
// })



// app.use (express.json())

// app.post ("/registration",registrationcontroller)

// app.listen(5000,() =>{
//     console.log(("Server Is Running"));
    
// })


