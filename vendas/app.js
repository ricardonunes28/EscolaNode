// Chamando modulos express e mongoose(importando modulos)
var express = require("express");
var mongoose = require("mongoose");//ferramenta para realizar a modelagem do banco
const app = express();//criando uma aplicação do express (objeto dentro do meu pacote express)
const port = 8000; // Aqui definimos a porta=3000

//Conexão com banco de dados.
mongoose.connect("meu banco", { useNewUrlParser: true, useUnifiedTopology: true });//flegs evitar tipo de erros e depreciação!

//Criando o modelo que ira compor a collection do banco!
const Produtos = mongoose.model("produtos", {
    nome: String,
    vlUnit: Number,
    codigoBarras: String
});

//chamando o motor de visualização
app.set("view engine", "ejs");//use como montor de visualização o ejs
app.set("views", __dirname, "/views");//minhas visualizações que vou precisar utilizar 


app.use(express.urlencoded());//permitindo que os dados passos, que haja fluxo(transitem) enrte minhas paginas 
app.use(express.json());// o fluxo dos meus arquivos seja em formato json


app.get("/", (req, res) => {
    res.send("Pagina Inicial") // rotas: aqui vou no minha pasta raiz
});

//Criando uma rota para listar os produtos cadastrados.
app.get("/produtos", (req, res) => {
    let consulta = Produtos.find({}, (err, produto) => {
        console.log(consulta)
        if (err)
            return res.status(500).send("Ao consultar produto");
        res.render("produtos", { produtos_itens: produto }); //rotas: redenrizar / redirecionado 
    });

});
//rota que vai me redenrizar de formulario do cadastro 
app.get("/cadastrarProdutos", (req, res) => {
    res.render("formprodutos")
});
//metodo POST para salvar os produtos no banco
app.post("/cadastrarProdutos", (req, res) => {
    let produto = new Produtos();//criando um objero do tipo Produtos.

    produto.nome = req.body.nome; // corpo da minha requisição
    produto.vlUnit = req.body.valor;
    produto.codigoBarras = req.body.codBarras;

    produto.save((err) => {
        if (err) // como se trata do servidor, preciso verificar se tem algum erro . 
            return res.status(500).send("Erro ao cadastrar")
        return res.redirect("/Produtos");
    })
})
app.get("/deletarProduto/:id", (req, res) => {
    let chave = req.params.id; // pegando o id do parametro
    Produtos.deleteOne({ _id: chave }, (err, result) => {
        if (err)
            return res.status(500).send("Erro ao excluir registro");
        res.redirect("/Produtos")
    });

})


//definindo a porta que vai acessar a minha aplicação
app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
});