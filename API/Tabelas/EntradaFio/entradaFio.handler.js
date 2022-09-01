const crud = require("../../crud");

const cadastrarEntradaFio = async (qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId, id) => {
    let verificacaoIds = await crud.buscarPorId("cliente", clienteId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de cliente não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("nota-fiscal", notaFiscalId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de nota fiscal não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("fornecedor", fornecedorId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de fornecedor não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("fio", fioId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de fio não encontrado" }
    }

    let entradaFio;
    if (id) {
        const checarEntradaFio = await buscarEntradaFioId(id)

        if (checarEntradaFio.naoEncontrado) {
            return { "Erro": "Id da entrada de fio não encontrado" }
        }

        entradaFio = await crud.cadastrar("entrada-fio", id, { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId });
    } else {
        entradaFio = await crud.cadastrar("entrada-fio", null, { qtdCaixa, peso, rolosPorCaixa, precoNotaFiscal, clienteId, notaFiscalId, fornecedorId, fioId });
    }
    return entradaFio;
}

const removerEntradaFio = async (id) => {
    const checarEntradaFio = await buscarEntradaFioId(id)

    if (checarEntradaFio.naoEncontrado) {
        return { "Erro": "Id da entrada de fio não encontrado" }
    }

    await crud.remover("entrada-fio", id);
    return buscarEntradaFios();
}

const buscarEntradaFios = async () => {
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