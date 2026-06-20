const securemiddleware = (req,res,next) =>{
    let backPass = "SAfj756^%&"
    let frontPass = req.headers.authorization
    if(backPass === frontPass){
        next()
    }
    else{
        res.send("Unauthorized(Chor)")
    }
}
module.exports = securemiddleware