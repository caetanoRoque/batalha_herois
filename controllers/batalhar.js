let heroi = require("./../model/heroi")
let vilao = require("./../model/vilao")
let batalhas = require("./../model/batalhar")

exports.post = (req, res) => {
    let batalha = req.body
    let h = batalha.idh
    let v = batalha.idv
    let heroi_encontrado = heroi.find(i => i.id == h)
    let vilao_encontrado = vilao.find(i => i.id == v)

    let b = calcular_vencedor(heroi_encontrado, vilao_encontrado)
    console.log(b.texto)
    console.log(b.vencedor)


    res.status(200).json(b.texto)
    batalhas.push(b.texto)

}

exports.get = (req, res) => {
    res.status(200).json(batalhas)
}

exports.post_times = (req, res) => {
    let requisicao = req.body
    // {"time_herois":[1,2,3], "time_viloes":[1.2.3]}

    let time_herois = heroi.filter(item => requisicao.time_herois.includes(item.id))
    let time_viloes = vilao.filter(item => requisicao.time_viloes.includes(item.id))

    let batalha1 = calcular_vencedor(time_herois[0])
    let batalha2 = calcular_vencedor(time_herois[1])
    let batalha3 = calcular_vencedor(time_herois[2])




    res.status(200).json({ "time_herois": time_herois, "time_viloes": time_viloes })
    console.log(time_herois)
}

function calcular_vencedor(heroi_batalha, vilao_batalha) {
    let b = {}
    if (heroi_batalha.imortal && vilao_batalha.imortal) {
        if (heroi_batalha.pontosDePoder > vilao_batalha.pontosDePoder) {
            b.texto = { "batalha": `${heroi_batalha.nome} venceu ${vilao_batalha.nome}.` }
            b.vencedor = 1

        } else if (heroi_batalha.pontosDePoder == vilao_batalha.pontosDePoder) {
            b.texto = { "batalha": `${heroi_batalha.nome} empatou com ${vilao_batalha.nome}.` }
            b.vencedor = 2
        } else {
            b.texto = { "batalha": `${vilao_batalha.nome} venceu ${heroi_batalha.nome}.` }
            b.vencedor = 3
        }
    } else if (heroi_batalha.imortal) {
        b.texto = { "batalha": `${heroi_batalha.nome} venceu ${vilao_batalha.nome}.` }
        b.vencedor = 1
    } else if (vilao_batalha.imortal) {
        b.texto = { "batalha": `${vilao_batalha.nome} venceu ${heroi_batalha.nome}.` }
        b.vencedor = 3
    }
    else if (heroi_batalha.pontosDePoder > vilao_batalha.pontosDePoder) {
        b.texto = { "batalha": `${heroi_batalha.nome} venceu ${vilao_batalha.nome}.` }
        b.vencedor = 1
    } else if (heroi_batalha.pontosDePoder == vilao_batalha.pontosDePoder) {
        b.texto = { "batalha": `${heroi_batalha.nome} empatou com ${vilao_batalha.nome}.` }
        b.vencedor = 2
    } else {
        b.texto = { "batalha": `${vilao_batalha.nome} venceu ${heroi_batalha.nome}.` }
        b.vencedor = 3
    }
    return b
}