const crud = require("../../crud");

<<<<<<< HEAD
const cadastrar = async ({descricao}) => {
    let malha
=======
const cadastrar = async ({descricao},id) => {
    let malha;
>>>>>>> 40ebce71745576967536cbc87f45c5043eb6dec1
    if (id) {
        malha = await crud.cadastrar("malha", id, {descricao});
    } else {
        malha = await crud.cadastrar("malha", null, {descricao});
    }
    return malha;
}

const remover = async (id) => {
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
    cadastrar,
    remover,
    buscarMalhas,
    buscarMalhaId
}