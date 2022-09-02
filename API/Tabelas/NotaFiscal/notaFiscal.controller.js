const express = require('express');
const router = express.Router();

const notaFiscalHandler = require('./notaFiscal.handler');

router.get('/', async (req, res) => {
    res.json(await notaFiscalHandler.buscarNotasFiscais());
});

router.get('/:id', async (req, res) =>{
    res.json(await notaFiscalHandler.buscarNotaFiscalId(req.params.id))
});

router.post('/', async (req, res) => {
    const { numero} = req.body;
    res.json(await notaFiscalHandler.cadastrarNotaFiscal(numero));
});

router.put('/:id', async (req, res) =>{
    const { numero } = req.body;
    res.json(await notaFiscalHandler.cadastrarNotaFiscal(numero, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await notaFiscalHandler.removerNotaFiscal(req.params.id));
});

module.exports = router;