const express = require('express');
const router = express.Router();

const producaoHandler = require('./producao.handler');

router.get('/', async (req, res) => {
    res.json(await producaoHandler.buscarProducoes());
});

router.get('/:id', async (req, res) =>{
    res.json(await producaoHandler.buscarProducaoId(req.params.id))
});

router.post('/', async (req, res) => {
    const { pesoRolo, defeito, clienteId, funcionarioId, maquinaId } = req.body;
    res.json(await producaoHandler.cadastrar(pesoRolo, defeito, clienteId, funcionarioId, maquinaId));
});

router.put('/:id', async (req, res) =>{
    const { pesoRolo, defeito, clienteId, funcionarioId, maquinaId } = req.body;
    res.json(await producaoHandler.cadastrar(pesoRolo, defeito, clienteId, funcionarioId, maquinaId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await producaoHandler.remover(req.params.id));
});

module.exports = router;