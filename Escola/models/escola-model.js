const mongoose = require("mongoose")

const Alunos = mongoose.model("alunos", {
    nome: String,
    idadeAluno: String,
    Serie: String
});

module.exports = Alunos;