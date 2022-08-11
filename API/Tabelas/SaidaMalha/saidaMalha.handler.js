const crud = require("../../crud");

const cadastrarSaidaMalha = async ({qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
    fornecedorId, fioId},id) => {
    let saidaMalha
    if (id) {
        saidaMalha = await crud.cadastrar("saida-malha", id, {qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
            fornecedorId, fioId});
    } else {
        saidaMalha = await crud.cadastrar("saida-malha", null, {qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
            fornecedorId, fioId});
    }
    return saidaMalha;
}

const removerSaidaMalha = async (id) => {
    crud.remover("saida-malha", id);
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