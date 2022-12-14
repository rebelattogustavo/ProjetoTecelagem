const express = require('express');
const router = express.Router();

const producaoHandler = require('./producao.handler');

router.get('/', async (req, res) => {
    res.json(await producaoHandler.buscarProducoes());
});

router.get('/:id', async (req, res) => {
    res.json(await producaoHandler.buscarProducaoId(req.params.id))
});

router.post('/', async (req, res) => {
    req.body.defeito = req.body.defeito ?? "Não possui defeito";
    const { pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status } = req.body;
    res.json(await producaoHandler.cadastrarProducao(pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status));
});

router.put('/:id', async (req, res) => {
    req.body.defeito = req.body.defeito ?? "Não possui defeito";
    const { pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status } = req.body;
    res.json(await producaoHandler.cadastrarProducao(pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await producaoHandler.removerProducao(req.params.id));
});

module.exports = router;