
const express = require('express');
const router = express.Router();

const cliente = require('./Tabelas/Cliente/cliente.controller');
const producao = require('./Tabelas/Producao/producao.controller');
const funcionario = require('./Tabelas/Funcionario/funcionario.controller');
const malhaCliente = require('./Tabelas/MalhaCliente/malhaCliente.controller');
const malha = require('./Tabelas/Malha/malha.controller');
const maquinaMalha = require('./Tabelas/MaquinaMalha/maquinaMalha.controller');
const saidaMalha = require('./Tabelas/SaidaMalha/saidaMalha.controller');
const notaFiscal = require('./Tabelas/NotaFiscal/notaFiscal.controller');
const entradaFio = require('./Tabelas/EntradaFio/entradaFio.controller');
const fioMalha = require('./Tabelas/FioMalha/fioMalha.controller');
const maquina = require('./Tabelas/Maquina/maquina.controller');
const maquinaFio = require('./Tabelas/MaquinaFio/maquinaFio.controller');
const fio = require('./Tabelas/Fio/fio.controller');
const fornecedor = require('./Tabelas/Fornecedor/fornecedor.controller');
const entradaMateriais = require('./Tabelas/EntradaMateriais/entradaMateriais.controller');
const item = require('./Tabelas/Item/item.controller');
const itemMaquina = require('./Tabelas/ItemMaquina/itemMaquina.controller');

router.use('/cliente', cliente);
router.use('/producao', producao);
router.use('/funcionario', funcionario);
router.use('/malha-cliente', malhaCliente);
router.use('/malha', malha);
router.use('/maquina-malha', maquinaMalha);
router.use('/saida-malha', saidaMalha);
router.use('/nota-fiscal', notaFiscal);
router.use('/entrada-fio', entradaFio);
router.use('/fio-malha', fioMalha);
router.use('/maquina', maquina);
router.use('/maquina-fio', maquinaFio);
router.use('/fio', fio);
router.use('/fornecedor', fornecedor);
router.use('/entrada-materiais', entradaMateriais);
router.use('/item', item);
router.use('/item-maquina', itemMaquina);

module.exports = router;