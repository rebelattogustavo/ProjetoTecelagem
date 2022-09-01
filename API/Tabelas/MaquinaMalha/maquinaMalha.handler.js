const crud = require("../../crud");

const cadastrarMaquinaMalha = async (maquinaId, malhaId, id) => {
    let maquinaMalha;
    let maquina = await crud.buscarPorId("maquina", maquinaId);
    if (maquina.naoEncontrado) {
        return { "Erro": "Máquina não encontrada!" }
    }

    let malha = await crud.buscarPorId("malha", malhaId);
    if (malha.naoEncontrado) {
        return { "Erro": "Malha não encontrada!" }
    }

    if (id) {
        let checaMaquinaMalha = await buscarMaquinaMalhaId(id);

        if (checaMaquinaMalha.naoEncontrado) {
            return { "Erro": "Máquina não encontrada!" }
        }

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