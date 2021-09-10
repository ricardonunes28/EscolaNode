const express = require("express");
const router = express.Router();

const escolaController = require("../controllers/escola-controller");

router.get("/", escolaController.lista_escola);

router.get("/pesquisa", escolaController.pesquisa_aluno_get);

router.get("/cadastrarAlunos", escolaController.cadastrar_alunos_get);

router.post("/cadastrarAlunos", escolaController.cadastrar_alunos_post);

router.get("/deletarAluno/:id", escolaController.deletar_aluno);

router.get("/editarAluno/:id", escolaController.editar_aluno_get);

router.post("/editarAluno", escolaController.editar_aluno_post);

module.exports = router;