const express = require('express');
const router = express.Router();

const funcionarioHandler = require('./funcionario.handler');

router.get('/', async (req, res) => {
    res.json(await funcionarioHandler.buscarFuncionarios());
});

router.get('/:id', async (req, res) =>{
    res.json(await funcionarioHandler.buscarFuncionarioId(req.params.id))
});

router.post('/', async (req, res) => {
    const { cpf, dataNascimento, nome, salario, turno } = req.body;
    res.json(await funcionarioHandler.cadastrar(cpf, dataNascimento, nome, salario, turno));
});

router.put('/:id', async (req, res) =>{
    const { cpf, dataNascimento, nome, salario, turno } = req.body;
    res.json(await funcionarioHandler.cadastrar(cpf, dataNascimento, nome, salario, turno, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await funcionarioHandler.remover(req.params.id));
});

module.exports = router;