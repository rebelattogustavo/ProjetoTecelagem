const express = require('express');
const router = express.Router();

const fioMalhaHandler = require('./fioMalha.handler');

router.get('/', async (req, res) => {
    res.json(await fioMalhaHandler.buscarFiosMalhas());
});

router.get('/:id', async (req, res) =>{
    res.json(await fioMalhaHandler.buscarFioMalhaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { fioid, malhaId } = req.body;
    res.json(await fioMalhaHandler.cadastrarFioMalha(fioid, malhaId));
});

router.put('/:id', async (req, res) =>{
    const { fioid, malhaId } = req.body;
    res.json(await fioMalhaHandler.cadastrarFioMalha(fioid, malhaId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await fioMalhaHandler.removerFioMalha(req.params.id));
});

module.exports = router;