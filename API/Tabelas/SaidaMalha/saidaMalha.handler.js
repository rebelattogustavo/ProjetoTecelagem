const crud = require("../../crud");

const cadastrarSaidaMalha = async (qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId,
    fornecedorId, fioId, id) => {
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

    let saidaMalha
    if (id) {
        const checarSaidaMalha = await buscarSaidaMalhaId(id)

        if (checarSaidaMalha.naoEncontrado) {
            return { "Erro": "Id de saída malha não encontrado" }
        }

        saidaMalha = await crud.cadastrar("saida-malha", id, {
            qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId,
            fornecedorId, fioId
        });
    } else {
        saidaMalha = await crud.cadastrar("saida-malha", null, {
            qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId,
            fornecedorId, fioId
        });
    }
    return saidaMalha;
}

const removerSaidaMalha = async (id) => {
    const checarSaidaMalha = await buscarSaidaMalhaId(id)

    if (checarSaidaMalha.naoEncontrado) {
        return { "Erro": "Id de saída malha não encontrado" }
    }

    await crud.remover("saida-malha", id);
    return buscarSaidasMalhas();
}

const buscarSaidasMalhas = async () => {
    const listaSaidasMalhas = await crud.buscar("saida-malha");
    return listaSaidasMalhas;
}

const buscarSaidaMalhaId = async (id) => {
    const saidaMalha = await crud.buscarPorId("saida-malha", id);
    return saidaMalha;
}

module.exports = {
    cadastrarSaidaMalha,
    removerSaidaMalha,
    buscarSaidasMalhas,
    buscarSaidaMalhaId
}