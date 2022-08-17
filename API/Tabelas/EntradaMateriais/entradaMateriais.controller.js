const express = require('express');
const router = express.Router();

const entradaMateriaisHandler = require('./entradaMateriais.handler');

router.get('/', async (req, res) => {
    res.json(await entradaMateriaisHandler.buscarEntradaMateriais());
});

router.get('/:id', async (req, res) =>{
    res.json(await entradaMateriaisHandler.buscarEntradaMaterialId(req.params.id))
});

router.post('/', async (req, res) => {
    const { descricao, quantidade, valorTotalGasto, notaFiscalId, fornecedorId, itemId} = req.body;
    res.json(await entradaMateriaisHandler.cadastrarEntradaMaterial(descricao, quantidade, valorTotalGasto, 
        notaFiscalId, fornecedorId, itemId));
});

router.put('/:id', async (req, res) =>{
    const { descricao, quantidade, valorTotalGasto, notaFiscalId, fornecedorId, itemId } = req.body;
    res.json(await entradaMateriaisHandler.cadastrarEntradaMaterial(descricao, quantidade, valorTotalGasto, 
        notaFiscalId, fornecedorId, itemId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await entradaMateriaisHandler.removerEntradaMaterial(req.params.id));
});

module.exports = router;