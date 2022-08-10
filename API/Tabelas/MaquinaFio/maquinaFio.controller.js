const express = require('express');
const router = express.Router();

const maquinaFioHandler = require('./maquinaFio.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaFioHandler.buscarMaquinaFios());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaFioHandler.buscarMaquinaFioId(req.params.id))
});

router.post('/', async (req, res) => {
    const { maquinaId, fioId} = req.body;
    res.json(await maquinaFioHandler.cadastrar(maquinaId, fioId));
});

router.put('/:id', async (req, res) =>{
    const { maquinaId, fioId } = req.body;
    res.json(await maquinaFioHandler.cadastrar(maquinaId, fioId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaFioHandler.remover(req.params.id));
});

module.exports = router;