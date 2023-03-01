let heroi = require("./../model/heroi")
let vilao = require("./../model/vilao")

exports.get = (req,res)=>{
    let todos={
        herois:heroi,
        viloes:vilao
    }
    res.status(200).send(todos)
}