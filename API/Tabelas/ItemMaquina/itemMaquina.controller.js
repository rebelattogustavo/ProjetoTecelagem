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
    const { item_id, maquina_id} = req.body;
    res.json(await itemMaquinaHandler.cadastrarItemMaquina(item_id, maquina_id));
});

router.put('/:id', async (req, res) =>{
    const { item_id, maquina_id } = req.body;
    res.json(await itemMaquinaHandler.cadastrarItemMaquina(item_id, maquina_id, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await itemMaquinaHandler.removerItemMaquina(req.params.id));
});

module.exports = router;