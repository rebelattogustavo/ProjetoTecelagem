const express = require('express');
const router = express.Router();

const funcionarioHandler = require('./funcionario.handler');

router.get('/', async (req, res) => {
    res.json(await clienteHandler.buscarCliente());
});

router.get('/:id', async (req, res) =>{
    res.json(await clienteHandler.buscarClienteId(req.params.id))
});

router.post('/', async (req, res) => {
    const { nome, cnpj } = req.body;
    res.json(await clienteHandler.cadastrar(nome, cnpj));
});

router.put('/:id', async (req, res) =>{
    const { nome, cnpj } = req.body;
    res.json(await clienteHandler.cadastrar(nome, cnpj, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await clienteHandler.remover(req.params.id));
});

module.exports = router;