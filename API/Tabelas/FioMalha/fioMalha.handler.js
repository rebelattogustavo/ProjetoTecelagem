const crud = require("../../crud");

const cadastrarFioMalha = async (fioid, malhaId, id) => {
    let fioMalhas;
    if (id) {
        fioMalhas = await crud.cadastrar("fio-malha", id, { fioid, malhaId });
    } else {
        fioMalhas = await crud.cadastrar("fio-malha", null, { fioid, malhaId });
    }
    return fioMalhas;
}

const removerFioMalha = async (id) => {
    crud.remover("fio-malha", id);
    return buscarFiosMalhas();
}

const buscarFiosMalhas = async () => {
    const listaFioMalhas = await crud.buscar("fio-malha");
    return listaFioMalhas;
}

const buscarFioMalhaId = async (id) => {
    const entradaMaterial = await crud.buscarPorId("fio-malha", id);
    return entradaMaterial;
}

module.exports = {
    cadastrarFioMalha,
    removerFioMalha,
    buscarFiosMalhas,
    buscarFioMalhaId
}