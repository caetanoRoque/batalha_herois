let heroi = require("./../model/heroi")
let vilao = require("./../model/vilao")

exports.post = (req,res)=>{
    let batalha= req.body
    let h=batalha.idh
    let v=batalha.idv
    let heroi_encontrado=heroi.find(i => i.id == h)
    let vilao_encontrado=vilao.find(i => i.id == v)

    if(heroi_encontrado.pontosDePoder>vilao_encontrado.pontosDePoder){
        res.status(200).json({"batalha":`${heroi_encontrado.nome} venceu ${vilao_encontrado.nome}.`})
    }else if(heroi_encontrado.pontosDePoder==vilao_encontrado.pontosDePoder){
        res.status(200).json({"batalha":`${heroi_encontrado.nome} empatou com ${vilao_encontrado.nome}.`})
    }else{
        res.status(200).json({"batalha":`${vilao_encontrado.nome} venceu ${heroi_encontrado.nome}.`})
    }
    
}