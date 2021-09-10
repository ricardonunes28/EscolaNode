// CARREGANDO MODULOS
var express = require("express");
var mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://ricardo_nunes:ricardo_nunes@cluster0.jlykd.mongodb.net/Escola?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });


//chamando o motor de visualização
app.set("view engine", "ejs");//use como montor de visualização o ejs
app.set("views", __dirname, "/views");//minhas visualizações que vou precisar utilizar 


app.use(express.urlencoded());//permitindo que os dados passos, que haja fluxo(transitem) enrte minhas paginas 
app.use(express.json());// o fluxo dos meus arquivos seja em formato json
app.use(express.static("public")); //Minhas pasta com permisão para css e js

const escola_router = require("./routers/escola-router");
app.use("/listaAlunos", escola_router);

// rotas: aqui vou no minha pasta raiz
app.get("/", (req, res) => {
    res.send("Pagina Inicial")
});



app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
});