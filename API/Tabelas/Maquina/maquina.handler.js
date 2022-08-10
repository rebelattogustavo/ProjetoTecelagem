const crud = require("../../crud");

const cadastrar = async (nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
    qtdPlatina, qtdGaiolas, qtdCones, id) => {
    let maquina;
    if (id) {
        maquina = crud.cadastrar("maquina", id, { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones });
    } else {
        maquina = crud.cadastrar("maquina", null, { nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones });
    }
    return maquina;
}

const remover = async (id) => {
    crud.remover("maquina", id);
    return buscar();
}

const buscarMaquinas = async () => {
    const listaMaquinas = await crud.buscar("maquina");
    return listaMaquinas;
}

const buscarMaquinaId = async (id) => {
    const maquina = await crud.buscarPorId("maquina", id);
    return maquina;
}

module.exports = {
    cadastrar,
    remover,
    buscarMaquinas,
    buscarMaquinaId
}