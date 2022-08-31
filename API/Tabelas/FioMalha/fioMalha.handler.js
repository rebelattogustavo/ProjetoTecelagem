const crud = require("../../crud");

const cadastrarFioMalha = async (fioid, malhaId, id) => {
    let fioMalhas;
<<<<<<< HEAD
    const fio  =  await crud.buscarPorId("fio", toString(fioid));
    const malha = await crud.buscarPorId("malha", toString(malhaId));
    if(!fio.naoEncontrado || !malha.naoEncontrado){
=======
    const fio  =  await crud.buscarPorId("fio", fioid);
    const malha = await crud.buscarPorId("malha", malhaId);
    console.log("fio", fio);
    console.log("malha", malha);

    if(!fio.naoEncontrado && !malha.naoEncontrado){
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
        if (id) {
            fioMalhas = await crud.cadastrar("fio-malha", id, { fioid, malhaId });
        } else {
            fioMalhas = await crud.cadastrar("fio-malha", null, { fioid, malhaId });
        } 
    } else {
        return { "Erro": "Fio e/ou Malha não existem!" };
    }

<<<<<<< HEAD

=======
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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