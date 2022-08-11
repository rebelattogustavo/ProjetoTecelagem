const crud = require("../../crud");

const cadastrarProducao = async (pesoRolo, defeito, clienteId, funcionarioId, maquinaId, id) => {
    let producao;
    if (id) {
        producao = await crud.cadastrar("producao", id, { pesoRolo, defeito, clienteId, funcionarioId, maquinaId });
    } else {
        producao = await crud.cadastrar("producao", null, { pesoRolo, defeito, clienteId, funcionarioId, maquinaId });
    }
    return producao;
}

const removerProducao = async (id) => {
    crud.remover("producao", id);
    return buscarProducoes();
}

const buscarProducoes = async () => {
    const listaProducao = await crud.buscar("producao");
    return listaProducao;
}

const buscarProducaoId = async (id) => {
    const producao = await crud.buscarPorId("producao", id);
    return producao;
}

module.exports = {
    cadastrarProducao,
    removerProducao,
    buscarProducoes,
    buscarProducaoId
}
