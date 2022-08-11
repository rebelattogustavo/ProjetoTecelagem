const crud = require("../../crud");

const cadastrarMalha = async ({descricao},id) => {
    let malha;
    if (id) {
        malha = await crud.cadastrar("malha", id, {descricao});
    } else {
        malha = await crud.cadastrar("malha", null, {descricao});
    }
    return malha;
}

const removerMalha = async (id) => {
    crud.remover("malha", id);
    return buscarMalhas();
}

const buscarMalhas = async () => {
    const listaMalha = await crud.buscar("malha");
    return listaMalha;
}

const buscarMalhaId = async (id) => {
    const malha = await crud.buscarPorId("malha", id);
    return malha;
}

module.exports = {
    cadastrarMalha,
    removerMalha,
    buscarMalhas,
    buscarMalhaId
}