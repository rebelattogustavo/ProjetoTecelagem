const crud = require("../../crud");

const cadastrar = async (nome, cnpj, id) => {
    let cliente;
    if (id) {
        cliente = await crud.cadastrar("cliente", id, { nome, cnpj });
    } else {
        cliente = await crud.cadastrar("cliente", null, { nome, cnpj });
    }
    return cliente;
}

const remover = async (id) => {
    crud.remover("cliente", id);
    return buscarClientes();
}

const buscarClientes = async () => {
    const listaClientes = await crud.buscar("cliente");
    return listaClientes;
}

const buscarClienteId = async (_id) => {
    const cliente = await crud.buscarPorId("cliente", _id);
    return cliente;
}

module.exports = {
    cadastrar,
    remover,
    buscarClientes,
    buscarClienteId
}