const crud = require("../../crud");

const cadastrar = async ({qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
    fornecedorId, fioId},id) => {
    if (id) {
        await crud.cadastrar("saida-malha", id, {qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
            fornecedorId, fioId});
    } else {
        await crud.cadastrar("saida-malha", null, {qtdRolos, pesoTotal, qualidadeMalha, valorSaida, clienteId, notaFiscalId, 
            fornecedorId, fioId});
    }
    return buscarSaidasMalhas();
}

const remover = async (id) => {
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
    cadastrar,
    remover,
    buscarSaidasMalhas,
    buscarSaidaMalhaId
}