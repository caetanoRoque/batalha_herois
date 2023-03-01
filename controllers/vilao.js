let vilao = require("./../model/vilao")

var XMLHttpRequest = require('xhr2');

exports.post = (req,res)=>{
    vilao.push(req.body)
    res.status(200).send(vilao)
}

exports.fundir = async (req, res) => {
    let obj= req.body
    let id = obj["id"]
    let v1 = obj["ids"]["id1"]
    let v2 = obj["ids"]["id2"]

    let vilao1 = vilao.find(i => i.id == v1)
    let vilao2 =vilao.find(i => i.id == v2)

    const media = (vilao1["pontosDePoder"] + vilao2["pontosDePoder"])/ 2
    const new_name = await fundir_nome(vilao1["nome"], vilao2["nome"])

    vilao.push({"id": id, "nome": new_name, "pontosDePoder": media, "imortal": false})
    res.status(201).send(`Um novo vilão chamado "${new_name}" foi criado! Ele possui ${media} pontos de poder!`)
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