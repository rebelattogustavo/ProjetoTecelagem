const crud = require("../../crud");

const cadastrarMaquinaFio = async (maquinaId, fioId, id) => {
    let maquinaFio;
    if (id) {
        maquinaFio = await crud.cadastrar("maquina-fio", id, { maquinaId, fioId });
    } else {
        maquinaFio = await crud.cadastrar("maquina-fio", null, { maquinaId, fioId });
    }
    return maquinaFio;
}

const removerMaquinaFio = async (id) => {
    crud.remover("maquina-fio", id);
    return buscarMaquinasFios();
}

const buscarMaquinasFios = async () => {
    const listaMaquinasFios = await crud.buscar("maquina-fio");
    return listaMaquinasFios;
}

const buscarMaquinaFioId = async (id) => {
    const maquinaFio = await crud.buscarPorId("maquina-fio", id);
    return maquinaFio;
}

module.exports = {
    cadastrarMaquinaFio,
    removerMaquinaFio,
    buscarMaquinasFios,
    buscarMaquinaFioId
}