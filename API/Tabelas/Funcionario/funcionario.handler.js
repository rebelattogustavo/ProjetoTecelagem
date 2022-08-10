const { cadastrar, buscar, buscarPorId, remover } = require("../../crud");

const cadastrar = async (nome, cnpj, id) => {
    if (id) {
        await cadastrar("funcionario", id, { nome, cnpj });
    } else {
        await cadastrar("funcionario", null, { nome, cnpj });
    }
    return buscar();
}

const remover = async (id) => {
    remover("funcionario", id);
    return buscar();
}

const buscarFuncionario = async () => {
    const listaFuncionario = await buscar("funcionario");
    return listaFuncionario;
}

const buscarFuncionarioId = async (_id) => {
    const funcionario = await buscarPorId("funcionario", _id);
    return funcionario;
}

module.exports = {
    cadastrar,
    remover,
    buscarFuncionario,
    buscarFuncionarioId
}