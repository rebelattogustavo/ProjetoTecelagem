const express = require('express');
const router = express.Router();

const saidaMalhaHandler = require('./saidaMalha.handler');

router.get('/', async (req, res) => {
    res.json(await saidaMalhaHandler.buscarSaidaMalhas());
});

router.get('/:id', async (req, res) =>{
    res.json(await saidaMalhaHandler.buscarSaidaMalhaId(req.params.id))
});

router.post('/', async (req, res) => {
    const { qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
        fornecedorId, fioId} = req.body;
    res.json(await saidaMalhaHandler.cadastrar(qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, 
        notaFiscalId, fornecedorId, fioId));
});

router.put('/:id', async (req, res) =>{
    const { qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
        fornecedorId, fioId } = req.body;
    res.json(await saidaMalhaHandler.cadastrar(qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, 
        notaFiscalId, fornecedorId, fioId, req.params.id));
});

router.delete('/:id', async (req, res) => {
    res.json(await saidaMalhaHandler.remover(req.params.id));
});

module.exports = router;