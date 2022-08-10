const express = require('express');
const router = express.Router();

const maquinaMalhaHandler = require('./maquinaMalha.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaMalhaHandler.buscarMaquinasMalhas());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaMalhaHandler.buscarMaquinaMalhaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { maquinaId, malhaId} = req.body;
    res.json(await maquinaMalhaHandler.cadastrar(maquinaId, malhaId));
});

router.put('/:id', async (req, res) =>{
    const { maquinaId, malhaId } = req.body;
    res.json(await maquinaMalhaHandler.cadastrar(maquinaId, malhaId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaMalhaHandler.remover(req.params.id));
});

module.exports = router;