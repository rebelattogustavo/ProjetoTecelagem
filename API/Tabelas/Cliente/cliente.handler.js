const crud = require("../../crud");

const cadastrarCliente = async (nome, cnpj, id) => {
    let cliente;
    if (id) {
        const clienteChecar = await buscarClienteId(id);

        if (clienteChecar.naoEncontrado) {
            return { "Erro": "Cliente inexistente" };
        }

        const clientes = await buscarClientes()
        for (let cliente of clientes) {
            if (cliente.cnpj == cnpj && cliente.id != id) {
                return { "Erro": "CNPJ inválido" };
            }
        }

        cliente = await crud.cadastrar("cliente", id, { nome, cnpj });
    } else {
        const clientes = await buscarClientes()
        for (let cliente of clientes) {
            if (cliente.cnpj == cnpj) {
                return { "Erro": "CNPJ já cadastrado" };
            }
        }

        cliente = await crud.cadastrar("cliente", null, { nome, cnpj });
    }
    return cliente;
}

const removerCliente = async (id) => {
    const cliente = await buscarClienteId(id);

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