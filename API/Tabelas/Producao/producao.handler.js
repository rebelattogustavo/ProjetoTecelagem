const crud = require("../../crud");

const cadastrarProducao = async (pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status, id) => {
    let producao;

    let cliente = await crud.buscarPorId("cliente", clienteId);
    if (cliente.naoEncontrado) {
        return { "Erro": "Máquina não encontrada!" }
    }

    let funcionario = await crud.buscarPorId("funcionario", funcionarioId);
    if (funcionario.naoEncontrado) {
        return { "Erro": "Máquina funcionario!" }
    }

    let maquina = await crud.buscarPorId("maquina", maquinaId);
    if (maquina.naoEncontrado) {
        return { "Erro": "Máquina não encontrada!" }
    }

    if (id) {
        producao = await crud.cadastrar("producao", id, {
            pesoRolo, defeito, clienteId, funcionarioId,
            maquinaId, status
        });
    } else {


        producao = await crud.cadastrar("producao", null, {
            pesoRolo, defeito, clienteId, funcionarioId,
            maquinaId, status: "em produção"
        });
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
