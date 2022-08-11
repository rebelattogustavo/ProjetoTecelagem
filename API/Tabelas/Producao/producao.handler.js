const crud = require("../../crud");

const cadastrarProducao = async ({pesoRolo, defeito, clienteId, funcionarioId, maquinaId},id) => {
    if (id) {
        await crud.cadastrar("producao", id, {pesoRolo, defeito, clienteId, funcionarioId, maquinaId});
    } else {
        await crud.cadastrar("producao", null, {pesoRolo, defeito, clienteId, funcionarioId, maquinaId});
    }
    return buscarProducoes();
}

const removerProducao = async (id) => {
    crud.remover("producao", id);
    return buscarProducoes();
}

const buscarProducoes = async () => {
    const listaNotasFiscais = await crud.buscar("producao");
    return listaNotasFiscais;
}

const buscarProducaoId = async (id) => {
    const notaFiscal = await crud.buscarPorId("producao", id);
    return notaFiscal;
}

module.exports = {
    cadastrarProducao,
    removerProducao,
    buscarProducoes,
    buscarProducaoId
}