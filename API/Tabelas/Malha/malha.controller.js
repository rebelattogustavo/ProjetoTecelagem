const express = require('express');
const router = express.Router();

const malhahandler = require('./malha.handler');

router.get('/', async (req, res) => {
    res.json(await malhahandler.buscarMalhas());
});

router.get('/:id', async (req, res) =>{
    res.json(await malhahandler.buscarMalhaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { descricao } = req.body;
    res.json(await malhahandler.cadastrar(descricao));
});

router.put('/:id', async (req, res) =>{
    const { descricao } = req.body;
    res.json(await malhahandler.cadastrar(descricao, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await malhahandler.remover(req.params.id));
});

module.exports = router;