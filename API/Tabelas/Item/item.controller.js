const express = require('express');
const router = express.Router();

const itemHandler = require('./item.handler');

router.get('/', async (req, res) => {
    res.json(await itemHandler.buscarItens());
});

router.get('/:id', async (req, res) =>{
    res.json(await itemHandler.buscarItemId(req.params.id))
});

router.post('/', async (req, res) => {
    const { tipo, quantidade } = req.body;
    res.json(await itemHandler.cadastrarItem(tipo, quantidade));
});

router.put('/:id', async (req, res) =>{
    const { tipo, quantidade } = req.body;
    res.json(await itemHandler.cadastrarItem(tipo, quantidade, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await itemHandler.removerItem(req.params.id));
});

module.exports = router;