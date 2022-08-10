const crud = require("../../crud");

const cadastrar = async (nome, cnpj, id) => {
    if (id) {
        await crud.cadastrar("cliente", id, { nome, cnpj });
    } else {
        await crud.cadastrar("cliente", null, { nome, cnpj });
    }
    return buscar();
}

const remover = async (id) => {
    crud.remover("cliente", id);
    return buscar();
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