import express from 'express'

const app = express();

// 1 parametro será a rota, o segundo será REQ/RES
app.get("/", (req, res) =>{
    return res.json({ message: "hello world" })
})

app.post("/", (req, res) =>{
    return res.json({ message: "dados salvos com sucesso" })
})

app.listen(2222, () => console.log('rodando na porta 2222'))