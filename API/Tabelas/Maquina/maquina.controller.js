const express = require('express');
const router = express.Router();

const maquinaHandler = require('./maquina.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaHandler.buscarMaquina());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaHandler.buscarMaquinaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha, 
        qtdPlatina, qtdGaiolas, qtdCones } = req.body;
    res.json(await maquinaHandler.cadastrar(nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
        qtdPlatina, qtdGaiolas, qtdCones));
});

router.put('/:id', async (req, res) =>{
    const { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha, 
        qtdPlatina, qtdGaiolas, qtdCones } = req.body;
    res.json(await maquinaHandler.cadastrar(nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
        qtdPlatina, qtdGaiolas, qtdCones, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaHandler.remover(req.params.id));
});

module.exports = router;