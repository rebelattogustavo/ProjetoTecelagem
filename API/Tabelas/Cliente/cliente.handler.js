const { cadastrar, buscar, buscarPorId, remover } = require("../../crud");

const cadastrarCliente = async (nome, cnpj, id) => {
    if (id) {
        await cadastrar("cliente", id, { nome, cnpj });
    } else {
        await cadastrar("cliente", null, { nome, cnpj });
    }
    return buscarCliente();
}

const removerCliente = async (id) => {
    remover("cliente", id);
    return buscarCliente();
}

const buscarCliente = async () => {
    const listaClientes = await buscar("cliente");
    return listaClientes;
}

const buscarClientePorId = async (_id) => {
    const cliente = await buscarPorId("cliente", _id);
    return cliente;
}

module.exports = {
    cadastrarCliente,
    removerCliente,
    buscarCliente,
    buscarClientePorId
}