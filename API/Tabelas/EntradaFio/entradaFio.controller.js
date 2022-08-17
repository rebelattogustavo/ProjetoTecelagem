const express = require('express');
const router = express.Router();

const entradaFio = require('./entradaFio.handler');

router.get('/', async (req, res) => {
    res.json(await entradaFio.buscarEntradaFios());
});

router.get('/:id', async (req, res) =>{
    res.json(await entradaFio.buscarEntradaFioId(req.params.id))
});

router.post('/', async (req, res) => {
    const { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId } = req.body;
    res.json(await entradaFio.cadastrarEntradaFio(qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, 
        notaFiscalId, fornecedorId, fioId));
});

router.put('/:id', async (req, res) =>{
    const { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId } = req.body;
    res.json(await entradaFio.cadastrarEntradaFio(qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, 
        notaFiscalId, fornecedorId, fioId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await entradaFio.removerEntradaFio(req.params.id));
});

module.exports = router;