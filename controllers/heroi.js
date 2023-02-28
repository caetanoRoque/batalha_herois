let heroi = require("./../model/heroi")

exports.post = (req,res)=>{
    heroi.push(req.body)
    res.status(200).send(heroi)
}