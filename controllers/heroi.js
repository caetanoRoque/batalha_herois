var XMLHttpRequest = require('xhr2');
let heroi = require("./../model/heroi")

exports.post = (req,res)=>{
    heroi.push(req.body)
    res.status(200).send(heroi)
}

exports.fundir = async (req, res) => {
    let obj= req.body
    let id = obj["id"]

    let h1 = obj["ids"]["id1"]
    let h2 = obj["ids"]["id2"]

    let heroi1 = heroi.find(i => i.id == h1)
    let heroi2 =heroi.find(i => i.id == h2)
    
    const media = (heroi1["pontosDePoder"] + heroi2["pontosDePoder"])/ 2
    const new_name = await fundir_nome(heroi1["nome"], heroi2["nome"])

    if (heroi1["imortal"] || heroi2["imortal"]){
        heroi.push({"id": id, "nome": new_name, "pontosDePoder": media, "imortal": true})
    } else {
        heroi.push({"id": id, "nome": new_name, "pontosDePoder": media, "imortal": false})
    }

    
    res.status(201).send(`Um novo herói chamado "${new_name}" foi criado! Ele possui ${media} pontos de poder!`)
}


async function fundir_nome(name1, name2){
    let n1 = name1.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');
    let n2 = name2.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '');

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://namecombiner.com/wk/mix-names/${n1}-${n2}`);
        xhr.send();
        xhr.responseType = "json";

        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = xhr.response;
                const names = data["result"]
                const name = names[Math.floor(Math.random() * names.length)];
                resolve(name);
            } else {
                console.log(`Error: ${xhr.status}`);
                reject(new Error(`Error: ${xhr.status}`));
            }
        };
    });
}