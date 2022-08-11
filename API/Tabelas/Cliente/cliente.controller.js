const express = require('express');
const router = express.Router();

const clienteHandler = require('./cliente.handler');

router.get('/', async (req, res) => {
    res.json(await clienteHandler.buscarClientes());
});

router.get('/:id', async (req, res) =>{
    res.json(await clienteHandler.buscarClienteId(req.params.id))
});

router.post('/', async (req, res) => {
    const { nome, cnpj } = req.body;
    res.json(await clienteHandler.cadastrarCliente(nome, cnpj));
});

router.put('/:id', async (req, res) =>{
    const { nome, cnpj } = req.body;
    res.json(await clienteHandler.cadastrarCliente(nome, cnpj, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await clienteHandler.removerCliente(req.params.id));
});

module.exports = router;