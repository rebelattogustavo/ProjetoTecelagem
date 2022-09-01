const crud = require("../../crud");

const cadastrarMaquinaFio = async (maquinaId, fioId, id) => {
    let verificacaoIds = await crud.buscarPorId("fio", fioId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de fio não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("maquina", maquinaId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de máquina não encontrado" }
    }

    let maquinaFio;
    if (id) {
        const checarMaquinaFio = await buscarMaquinaFioId(id)

        if (checarMaquinaFio.naoEncontrado) {
            return { "Erro": "Id de máquina fio não encontrado" }
        }

        maquinaFio = await crud.cadastrar("maquina-fio", id, { maquinaId, fioId });
    } else {
        maquinaFio = await crud.cadastrar("maquina-fio", null, { maquinaId, fioId });
    }
    return maquinaFio;
}

const removerMaquinaFio = async (id) => {
    const checarMaquinaFio = await buscarMaquinaFioId(id)

    if (checarMaquinaFio.naoEncontrado) {
        return { "Erro": "Id de máquina fio não encontrado" }
    }

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