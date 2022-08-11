const crud = require("../../crud");

const cadastrarEntradaFio = async (qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId, id) => {
    let entradaFio;
    if (id) {
        entradaFio = await crud.cadastrar("entrada-fio", id, { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId });
    } else {
        entradaFio = await crud.cadastrar("entrada-fio", null, { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId });
    }
    return entradaFio;
}

const removerEntradaFio = async (id) => {
    crud.remover("entrada-fio", id);
    return buscarEntradaFios();
}

const buscarEntradaFios= async () => {
    const listaEntradaFios = await crud.buscar("entrada-fio");
    return listaEntradaFios;
}

const buscarEntradaFioId = async (id) => {
    const entradaFio = await crud.buscarPorId("entrada-fio", id);
    return entradaFio;
}

module.exports = {
    cadastrarEntradaFio,
    removerEntradaFio,
    buscarEntradaFios,
    buscarEntradaFioId
}