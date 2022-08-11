const express = require('express');
const router = express.Router();

const fornecedorHandler = require('./fornecedor.handler');

router.get('/', async (req, res) => {
    res.json(await fornecedorHandler.buscarFornecedores());
});

router.get('/:id', async (req, res) =>{
    res.json(await fornecedorHandler.buscarFornecedorId(req.params.id))
});

router.post('/', async (req, res) => {
    const { nome, cnpj } = req.body;
    res.json(await fornecedorHandler.cadastrarFornecedor(nome, cnpj));
});

router.put('/:id', async (req, res) =>{
    const { nome, cnpj } = req.body;
    res.json(await fornecedorHandler.cadastrarFornecedor(nome, cnpj, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await fornecedorHandler.removerFornecedor(req.params.id));
});

module.exports = router;