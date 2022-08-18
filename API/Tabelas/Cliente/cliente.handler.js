const crud = require("../../crud");


const cadastrarCliente = async (nome, cnpj, id) => {
    let cliente;
    if (id) {
        cliente = await crud.cadastrar("cliente", id, { nome, cnpj });
    } else {
        cliente = await crud.cadastrar("cliente", null, { nome, cnpj });
    }
    return cliente;
}

const removerCliente = async (id) => {
    let cliente = await buscarClienteId(id);

    if (!cliente.naoEncontrado) {
        await crud.remover("cliente", id);
    } else {
        return { "Erro": "Cliente inexistente" };
    }
    return { "Sucesso": `Cliente ${cliente.nome}, removido com sucesso!` };
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
    cadastrarCliente,
    removerCliente,
    buscarClientes,
    buscarClienteId
}