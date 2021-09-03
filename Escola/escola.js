var express = require("express");
var mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://ricardo_nunes:ricardo_nunes@cluster0.jlykd.mongodb.net/Escola?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const Alunos = mongoose.model("alunos", {
    nome: String,
    idadeAluno: Number,
    Serie: String
});

//chamando o motor de visualização
app.set("view engine", "ejs");//use como montor de visualização o ejs
app.set("views", __dirname, "/views");//minhas visualizações que vou precisar utilizar 


app.use(express.urlencoded());//permitindo que os dados passos, que haja fluxo(transitem) enrte minhas paginas 
app.use(express.json());// o fluxo dos meus arquivos seja em formato json
app.use(express.static("public")); //Minhas pasta com permisão para css e js

app.get("/", (req, res) => {
    res.send("Pagina Inicial") // rotas: aqui vou no minha pasta raiz
});


app.get("/listaAlunos", (req, res) => {
    let consulta = Alunos.find({}, (err, Alunos) => {
        console.log(consulta)
        if (err)
            return res.status(500).send("Ao consultar alunos");
        res.render("listaAlunos", { listaAlunos: Alunos }); //rotas: redenrizar / redirecionado 
    });

});
app.get("/cadastrarAlunos", (req, res) => {
    res.render("formescola")
});

app.post("/cadastrarAlunos", (req, res) => {
    let aluno = new Alunos();

    aluno.nome = req.body.nome; // corpo da minha requisição
    aluno.idadeAluno = req.body.idade;
    aluno.Serie = req.body.serieA;

    aluno.save((err) => {
        if (err) // como se trata do servidor, preciso verificar se tem algum erro . 
            return res.status(500).send("Erro ao cadastrar")
        return res.redirect("/listaAlunos");
    })
})

app.get("/deletarAluno/:id", (req, res) => {
    let chave = req.params.id; // pegando o id do parametro
    Alunos.deleteOne({ _id: chave }, (err, result) => {
        if (err)
            return res.status(500).send("Erro ao excluir registro");
        res.redirect("/listaAlunos")
    });

})

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
});