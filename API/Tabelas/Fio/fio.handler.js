const crud = require("../../crud");

const cadastrarFio = async (descricao,id) => {
    let fio;
    if (id) {
        fio = await crud.cadastrar("fio", id, {descricao});
    } else {
        fio = await crud.cadastrar("fio", null, {descricao});
    }
    return fio;
}

const removerFio = async (id) => {
    crud.remover("fio", id);
    return buscarFios();
}

const buscarFios = async () => {
    const listaFios = await crud.buscar("fio");
    return listaFios;
}

const buscarFioId = async (id) => {
    const fio = await crud.buscarPorId("fio", id);
    return fio;
}

module.exports = {
    cadastrarFio,
    removerFio,
    buscarFios,
    buscarFioId
}