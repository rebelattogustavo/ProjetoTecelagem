const express = require('express');
const router = express.Router();

const itemMaquinaHandler = require('./itemMaquina.handler');

router.get('/', async (req, res) => {
    res.json(await itemMaquinaHandler.buscarItensMaquinas());
});

router.get('/:id', async (req, res) =>{
    res.json(await itemMaquinaHandler.buscarItemMaquinaId(req.params.id))
});+

router.post('/', async (req, res) => {
    const { itemId, maquinaId} = req.body;
    res.json(await itemMaquinaHandler.cadastrar(itemId, maquinaId));
});

router.put('/:id', async (req, res) =>{
    const { itemId, maquinaId } = req.body;
    res.json(await itemMaquinaHandler.cadastrar(itemId, maquinaId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await itemMaquinaHandler.remover(req.params.id));
});

module.exports = router;