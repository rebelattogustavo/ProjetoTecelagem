const crud = require("../../crud");

const cadastrarMaquinaMalha = async ( maquinaId, malhaId, id) => {
    let maquinaMalha;
    if (id) {
        maquinaMalha = await crud.cadastrar("maquina-malha", id, { maquinaId, malhaId });
    } else {
        maquinaMalha = await crud.cadastrar("maquina-malha", null, { maquinaId, malhaId });
    }
    return maquinaMalha;
}

const removerMaquinaMalha = async (id) => {
    crud.remover("maquina-malha", id);
    return buscarMaquinas();
}

const buscarMaquinasMalhas = async () => {
    const listaMaquinasMalhas = await crud.buscar("maquina-malha");
    return listaMaquinasMalhas;
}

const buscarMaquinaMalhaId = async (id) => {
    const maquinaMalha = await crud.buscarPorId("maquina-malha", id);
    return maquinaMalha;
}

module.exports = {
    cadastrarMaquinaMalha,
    removerMaquinaMalha,
    buscarMaquinasMalhas,
    buscarMaquinaMalhaId
}