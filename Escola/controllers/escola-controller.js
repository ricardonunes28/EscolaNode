const escola_bd = require("../models/escola-model");//Importando o modelo do banco, na pasta de models.

exports.pesquisa_aluno_get = (req, res) => {
    var busca = req.query.pesquisa;
    console.log(busca);
    escola_bd.find({ $or: [{ nome: busca }, { idadeAluno: busca }, { Serie: busca }] }, (err, Alunos) => {
        if (err)
            return res.status(500).send("Erro ao Pesquisar");
        res.render("views/pages/listaAlunos", { listaAlunos: Alunos });
    });

};

exports.lista_escola = (req, res) => {
    let consulta = escola_bd.find({}, (err, Alunos) => {
        console.log(consulta)
        if (err)
            return res.status(500).send("Ao consultar alunos");
        res.render("views/pages/listaAlunos", { listaAlunos: Alunos });
    });
};

exports.cadastrar_alunos_get = (req, res) => {
    res.render("views/pages/formescola");
};

exports.cadastrar_alunos_post = (req, res) => {
    let aluno = new escola_bd();

    aluno.nome = req.body.nome;
    aluno.idadeAluno = req.body.idade;
    aluno.Serie = req.body.serieA;

    aluno.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar")
        return res.redirect("/listaAlunos");
    });
};

exports.deletar_aluno = (req, res) => {
    let chave = req.params.id;
    escola_bd.deleteOne({ _id: chave }, (err, result) => {
        if (err)
            return res.status(500).send("Erro ao excluir registro");
        res.redirect("/listaAlunos")
    });
};

exports.editar_aluno_get = (req, res) => {
    let id = req.params.id;
    escola_bd.findById(id, (err, aluno) => {
        if (err)
            return res.status(500).send("ERRO AO EDITAR");
        res.render("views/pages/formEditarEscola", { resultado: aluno });
    });
};

exports.editar_aluno_post = (req, res) => {
    let id = req.body.id;
    escola_bd.findById(id, (err, aluno) => {
        if (err)
            return res.status(500).send("ERRO AO EDIATR");

        aluno.nome = req.body.nome;
        aluno.idadeAluno = req.body.idade;
        aluno.Serie = req.body.serieA;

        aluno.save((err) => {
            if (err)
                return res.status(500).send("ERRO AO EDITAR");
            return res.redirect("/listaAlunos");
        });
    });
};




