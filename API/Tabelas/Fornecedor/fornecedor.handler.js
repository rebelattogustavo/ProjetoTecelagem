const crud = require("../../crud");

const cadastrarFornecedor = async (nome, cnpj, id) => {
    let fornecedores;
    if (id) {
        fornecedores = await crud.cadastrar("fornecedor", id, { nome, cnpj });
    } else {
        fornecedores = await crud.cadastrar("fornecedor", null, { nome, cnpj });
    }
    return fornecedores;
}

const removerFornecedor = async (id) => {
    crud.remover("fornecedor", id);
    return buscarFornecedores();
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