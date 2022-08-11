const express = require('express');
const router = express.Router();

const fioHandler = require('./fio.handler');

router.get('/', async (req, res) => {
    res.json(await fioHandler.buscarFios());
});

router.get('/:id', async (req, res) =>{
    res.json(await fioHandler.buscarFioId(req.params.id))
});

router.post('/', async (req, res) => {
    const { descricao } = req.body;
    res.json(await fioHandler.cadastrarFio(descricao));
});

router.put('/:id', async (req, res) =>{
    const { descricao } = req.body;
    res.json(await fioHandler.cadastrarFio(descricao, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await fioHandler.removerFio(req.params.id));
});

module.exports = router;