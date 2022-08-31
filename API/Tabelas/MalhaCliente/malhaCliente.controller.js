const express = require('express');
const router = express.Router();

const maquinaClienteHandler = require('./malhaCliente.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaClienteHandler.buscarMalhasClientes());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaClienteHandler.buscarMalhaClienteId(req.params.id))
});

router.post('/', async (req, res) => {
    const { maquinaId, clienteId} = req.body;
    res.json(await maquinaClienteHandler.cadastrarMalhaCliente(maquinaId, clienteId));
});

router.put('/:id', async (req, res) =>{
    const { maquinaId, clienteId } = req.body;
    res.json(await maquinaClienteHandler.cadastrarMalhaCliente(maquinaId, clienteId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaClienteHandler.removerMalhaCliente(req.params.id));
});

module.exports = router;