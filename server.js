const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
const heroiRoutes = require("./routes/heroi")
const vilaoRoutes = require("./routes/vilao")
const batalharRoutes = require("./routes/batalhar")
const todosRoutes = require("./routes/todos")

const app = express()
app.use(bodyParser.json())

app.use("/heroi", heroiRoutes)
app.use("/vilao", vilaoRoutes)
app.use("/batalhar", batalharRoutes)
app.use("/todos", todosRoutes)


app.listen(port,()=>{
    console.log("Servidor express rodando na porta 3000!")
})