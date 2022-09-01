const crud = require("../../crud");

const cadastrarMaquinaMalha = async ( maquinaId, malhaId, id) => {
    let verificacaoIds = await crud.buscarPorId("malha", malhaId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de malha não encontrado" }
    }

    verificacaoIds = await crud.buscarPorId("maquina", maquinaId)
    if (verificacaoIds.naoEncontrado) {
        return { "Erro": "Id de máquina não encontrado" }
    }

    let maquinaMalha;
    if (id) {
        const checarMaquinaMalha = await buscarMaquinaMalhaId(id)

        if (checarMaquinaMalha.naoEncontrado) {
            return { "Erro": "Id de máquina malha não encontrado" }
        }

        maquinaMalha = await crud.cadastrar("maquina-malha", id, { maquinaId, malhaId });
    } else {
        maquinaMalha = await crud.cadastrar("maquina-malha", null, { maquinaId, malhaId });
    }
    return maquinaMalha;
}

const removerMaquinaMalha = async (id) => {
    const checarMaquinaFio = await buscarMaquinaMalhaId(id)

    if (checarMaquinaFio.naoEncontrado) {
        return { "Erro": "Id de máquina fio não encontrado" }
    }

    crud.remover("maquina-malha", id);
    return buscarMaquinasMalhas();
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