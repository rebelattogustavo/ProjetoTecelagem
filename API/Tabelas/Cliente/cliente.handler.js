const {cadastrar, buscar, buscarPorId, remover} = require("../../crud");

const cadastrarCliente = (cliente) => {
    const clienteCadastrado = cadastrar("cliente", null, cliente);
    return clienteCadastrado;
}

const atualizarCliente = (id, cliente) => {
    const clienteAtualizado = cadastrar("cliente", id, cliente);
    return clienteAtualizado;
}

const removerCliente = (id) => {
    const clienteRemovido = remover("cliente", id);
    return clienteRemovido;
}

const buscarCliente = () => {
    const listaClientes = buscar("cliente");
    return listaClientes;
}

const buscarClientePorId = (_id) => {
    const cliente = buscarPorId("cliente", _id);
    return cliente;
}

module.exports = {
    cadastrarCliente,
    atualizarCliente,
    removerCliente,
    buscarCliente,
    buscarClientePorId
}