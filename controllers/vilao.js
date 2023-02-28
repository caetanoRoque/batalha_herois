let vilao = require("./../model/vilao")

exports.post = (req,res)=>{
    vilao.push(req.body)
    res.status(200).send(vilao)
}