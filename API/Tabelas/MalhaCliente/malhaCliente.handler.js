const crud = require("../../crud");

const cadastrarMalhaCliente = async (maquinaId, clienteId,id) => {
    let verificacaoIds = await crud.buscarPorId("cliente", clienteId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de cliente não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("maquina", maquinaId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de máquina não encontrado" }
    }

    let malhaCliente;
    if (id) {
        const checarMalhaCLiente = await buscarMalhaClienteId(id)

        if(checarMalhaCLiente.naoEncontrado){
            return {"Erro": "Id de malha cliente não encontrado"}
        }

        malhaCliente = await crud.cadastrar("malha-cliente", id, {maquinaId, clienteId});
    } else {
        malhaCliente = await crud.cadastrar("malha-cliente", null, {maquinaId, clienteId});
    }
    return malhaCliente;
}

const removerMalhaCliente = async (id) => {
    const checarmalhaCLiente = buscarMalhaClienteId(id)

        if(checarmalhaCLiente.naoEncontrado){
            return {"Erro": "Id de malha cliente não encontrado"}
        }

    crud.remover("malha-cliente", id);
    return buscarMalhasClientes();
}

const buscarMalhasClientes = async () => {
    const listaMalha = await crud.buscar("malha-cliente");
    return listaMalha;
}

const buscarMalhaClienteId = async (id) => {
    const malha = await crud.buscarPorId("malha-cliente", id);
    return malha;
}

module.exports = {
    cadastrarMalhaCliente,
    removerMalhaCliente,
    buscarMalhasClientes,
    buscarMalhaClienteId
}