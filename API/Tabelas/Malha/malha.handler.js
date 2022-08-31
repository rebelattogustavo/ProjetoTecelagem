const crud = require("../../crud");

const cadastrarMalha = async (descricao, valor, id) => {
    let malha;
    if (id) {
        const malhaChecar = await buscarMalhaId(id);

        if (malhaChecar.naoEncontrado) {
            return { "Erro": "Malha inexistente" };
        }

<<<<<<< HEAD
        malha = await crud.cadastrar("malha", id, {descricao});
=======
        malha = await crud.cadastrar("malha", id, {descricao, valor});
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
    } else {
        malha = await crud.cadastrar("malha", null, {descricao,valor});
    }
    return malha;
}

const removerMalha = async (id) => {
    const malha = await buscarMalhaId(id);
<<<<<<< HEAD

    if (!malha.naoEncontrado) {
=======
    const fioMalha = await crud.buscar("fio-malha");

    if (!malha.naoEncontrado) {
        for(let fMalha of fioMalha){
            if(malha.id == fMalha.malha_id){
                const objDeletado = await crud.remover("fio-malha", fMalha.id);
            }
        }
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
        await crud.remover("malha", id);
    } else {
        return { "Erro": "Malha inexistente" };
    }
<<<<<<< HEAD
=======

>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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