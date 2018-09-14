module.exports = (req,res)=>{
    console.log('IN  CONTROLLER, DB HOST :', process.env.DB_HOST)
    res.end()
}