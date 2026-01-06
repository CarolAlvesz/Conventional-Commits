const express = require('express');
const app = express();
app.use(express.json());

const produtos = [];

// Create

app.post("/produtos", function(req,res){
    const produto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco
    };

    produtos.push(produto)
    return res.status(201).json({message: "Produto criado com sucesso", data: produto});
})

// Read 
app.get("/produtos", function(req,res){
    return res.status(200).json({data: produtos});
    
});

// Update
app.put("/produtos/:Id", function(req,res){
    const { Id } = req.params;
    const { nome, preco } = req.body;

    const produto = produtos.find(p => p.id === Number(Id));

    if (!produto) {
        return res.status(404).json({error: "Produto não encontrado"});
    }

    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;
    return res.status(200).json({message: "Produto atualizado com sucesso", data: produto});
})

// Delete
app.delete("/produtos/:Id", function(req,res){
    const { Id } = req.params;
    const produtoIndex = produtos.findIndex(p => p.id === Number(Id));
    return res.status(200).json({message: "Produto deletado com sucesso"});



})

app.listen(3000, function(){
    console.log("Servidor rodando na porta http://localhost:3000");
});