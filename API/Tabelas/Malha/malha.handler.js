const crud = require("../../crud");

const cadastrar = async ({descricao}) => {
    if (id) {
        await crud.cadastrar("malha", id, {descricao});
    } else {
        await crud.cadastrar("malha", null, {descricao});
    }
    return buscarMalhas();
}

const remover = async (id) => {
    crud.remover("malha", id);
    return buscar();
}

const buscarMalhas = async () => {
    const listaMalha = await crud.buscar("malha");
    return listaMalha;
}

const buscarMalhaId = async (id) => {
    const funcionario = await crud.buscarPorId("malha", id);
    return funcionario;
}

module.exports = {
    cadastrar,
    remover,
    buscarMalhas,
    buscarMalhaId
}