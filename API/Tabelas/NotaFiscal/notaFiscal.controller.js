const express = require('express');
const router = express.Router();

const notaFiscalHandler = require('./notaFiscal.handler');

router.get('/', async (req, res) => {
    res.json(await notaFiscalHandler.buscarNotasFiscais());
});

router.get('/:id', async (req, res) =>{
    res.json(await notaFiscalHandler.buscarNotasFiscalId(req.params.id))
});

router.post('/', async (req, res) => {
    const { arquivo} = req.body;
    res.json(await notaFiscalHandler.cadastrar(arquivo));
});

router.put('/:id', async (req, res) =>{
    const { arquivo } = req.body;
    res.json(await notaFiscalHandler.cadastrar(arquivo, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await notaFiscalHandler.remover(req.params.id));
});

module.exports = router;