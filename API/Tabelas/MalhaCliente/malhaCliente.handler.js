const crud = require("../../crud");

const cadastrarMaquinaCliente = async ({descricao},id) => {
    let maquinaCliente;
    if (id) {
        maquinaCliente = await crud.cadastrar("maquina-cliente", id, {descricao});
    } else {
        maquinaCliente = await crud.cadastrar("maquina-cliente", null, {descricao});
    }
    return maquinaCliente;
}

const removerMaquinaCliente = async (id) => {
    crud.remover("maquina-cliente", id);
    return buscarMalhas();
}

const buscarMaquinasClientes = async () => {
    const listaMalha = await crud.buscar("maquina-cliente");
    return listaMalha;
}

const buscarMaquinaClienteId = async (id) => {
    const malha = await crud.buscarPorId("maquina-cliente", id);
    return malha;
}

module.exports = {
    cadastrarMaquinaCliente,
    removerMaquinaCliente,
    buscarMaquinasClientes,
    buscarMaquinaClienteId
}