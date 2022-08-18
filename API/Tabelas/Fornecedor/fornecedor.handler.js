const crud = require("../../crud");

const cadastrarFornecedor = async (nome, cnpj, id) => {
    let fornecedor;
    if (id) {
        const fornecedorChecar = await buscarFornecedorId(id);

        if (fornecedorChecar.naoEncontrado) {
            return { "Erro": "Cliente inexistente" };
        }

        const fornecedores = await buscarFornecedores()
        for (let fornecedor of fornecedores) {
            if (fornecedor.cnpj == cnpj && fornecedor.id != id) {
                return { "Erro": "CNPJ inválido" };
            }
        }

        fornecedor = await crud.cadastrar("fornecedor", id, { nome, cnpj });
    } else {
        const fornecedores = await buscarFornecedores()
        for (let fornecedor of fornecedores) {
            if (fornecedor.cnpj == cnpj) {
                return { "Erro": "CNPJ já cadastrado" };
            }
        }

        fornecedor = await crud.cadastrar("fornecedor", null, { nome, cnpj });
    }
    return fornecedor;
}

const removerFornecedor = async (id) => {
    const fornecedor = await buscarFornecedorId(id);

    if (!fornecedor.naoEncontrado) {
        await crud.remover("fornecedor", id);
    } else {
        return { "Erro": "Fornecedor inexistente" };
    }
    return { "Sucesso": `Fornecedor ${fornecedor.nome}, removido com sucesso!` };
}

const buscarFornecedores = async () => {
    const listaFornecedores = await crud.buscar("fornecedor");
    return listaFornecedores;
}

const buscarFornecedorId = async (id) => {
    const fornecedor = await crud.buscarPorId("fornecedor", id);
    return fornecedor;
}

module.exports = {
    cadastrarFornecedor,
    removerFornecedor,
    buscarFornecedores,
    buscarFornecedorId
}