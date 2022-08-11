const crud = require("../../crud");

const cadastrarMaquinaFio = async (nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
    qtdPlatina, qtdGaiolas, qtdCones, id) => {
    let maquina;
    if (id) {
        maquina = await crud.cadastrar("maquina", id, { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones });
    } else {
        maquina = await crud.cadastrar("maquina", null, { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones });
    }
    return maquina;
}

const removerMaquinaFio = async (id) => {
    crud.remover("maquina", id);
    return buscarMaquinasFios();
}

const buscarMaquinasFios = async () => {
    const listaMaquinas = await crud.buscar("maquina");
    return listaMaquinas;
}

const buscarMaquinaFioId = async (id) => {
    const maquinaFio = await crud.buscarPorId("maquina", id);
    return maquinaFio;
}

module.exports = {
    cadastrar,
    remover,
    buscarMaquinas,
    buscarMaquinaId
}