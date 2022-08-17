const express = require('express');
const router = express.Router();

const maquinaClienteHandler = require('./malhaCliente.handler');

router.get('/', async (req, res) => {
    res.json(await maquinaClienteHandler.buscarMaquinasClientes());
});

router.get('/:id', async (req, res) =>{
    res.json(await maquinaClienteHandler.buscarMaquinaClienteId(req.params.id))
});

router.post('/', async (req, res) => {
    const { maquinaId, clienteId} = req.body;
    res.json(await maquinaClienteHandler.cadastrarMaquinaCliente(maquinaId, clienteId));
});

router.put('/:id', async (req, res) =>{
    const { maquinaId, clienteId } = req.body;
    res.json(await maquinaClienteHandler.cadastrarMaquinaCliente(maquinaId, clienteId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await maquinaClienteHandler.removerMaquinaCliente(req.params.id));
});

module.exports = router;