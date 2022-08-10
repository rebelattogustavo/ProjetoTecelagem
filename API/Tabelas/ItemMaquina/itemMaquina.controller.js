const express = require('express');
const router = express.Router();

const itemMaquinaHandler = require('./itemMaquina.handler');

router.get('/', async (req, res) => {
    res.json(await itemMaquinaHandler.buscarEntradasMateriais());
});

router.get('/:id', async (req, res) =>{
    res.json(await itemMaquinaHandler.buscarEntradasMaterialId(req.params.id))
});

router.post('/', async (req, res) => {
    const { arquivo} = req.body;
    res.json(await itemMaquinaHandler.cadastrar(arquivo));
});

router.put('/:id', async (req, res) =>{
    const { arquivo } = req.body;
    res.json(await itemMaquinaHandler.cadastrar(arquivo, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await itemMaquinaHandler.remover(req.params.id));
});

module.exports = router;