const crud = require("../../crud");

const cadastrarMalha = async (descricao, valor, id) => {
    let malha;
    if (id) {
        const malhaChecar = await buscarMalhaId(id);

        if (malhaChecar.naoEncontrado) {
            return { "Erro": "Malha inexistente" };
        }

        malha = await crud.cadastrar("malha", id, {descricao, valor});
    } else {
        malha = await crud.cadastrar("malha", null, { descricao, valor });
    }
    return malha;
}

const removerMalha = async (id) => {
    const malha = await buscarMalhaId(id);
    const fioMalha = await crud.buscar("fio-malha");

    if (!malha.naoEncontrado) {
        for(let fMalha of fioMalha){
            if(malha.id == fMalha.malha_id){
                const objDeletado = await crud.remover("fio-malha", fMalha.id);
            }
        }
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