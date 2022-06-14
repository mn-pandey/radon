
const mid = async ( req, res, next) => {
    let data = req.headers.isfreeappuser
   if(data){
    next()
   }
    else{
    res.send({msg:"request is missing a mandatory header"})
    }
    
};
module.exports.mid = mid

