const express = require('express');
const router = express.Router();

const maquinaClienteHandler = require('./maquinaCliente.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaClienteHandler.buscarMaquinasMalhas());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaClienteHandler.buscarMaquinaMalhaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { maquinaId, clienteId} = req.body;
    res.json(await maquinaClienteHandler.cadastrar(maquinaId, clienteId));
});

router.put('/:id', async (req, res) =>{
    const { maquinaId, clienteId } = req.body;
    res.json(await maquinaClienteHandler.cadastrar(maquinaId, clienteId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaClienteHandler.remover(req.params.id));
});

module.exports = router;