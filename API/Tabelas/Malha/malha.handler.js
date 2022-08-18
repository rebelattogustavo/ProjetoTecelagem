const crud = require("../../crud");

const cadastrarMalha = async (descricao,id) => {
    let malha;
    if (id) {
        const malhaChecar = await buscarMalhaId(id);

        if (malhaChecar.naoEncontrado) {
            return { "Erro": "Malha inexistente" };
        }

        malha = await crud.cadastrar("malha", id, {descricao});
    } else {
        malha = await crud.cadastrar("malha", null, {descricao});
    }
    return malha;
}

const removerMalha = async (id) => {
    const malha = await buscarMalhaId(id);

    if (!malha.naoEncontrado) {
        await crud.remover("malha", id);
    } else {
        return { "Erro": "Malha inexistente" };
    }
    return { "Sucesso": `Malha removida com sucesso!` };
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