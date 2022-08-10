const crud = require("../../crud");

const cadastrar = async (tipo, quantidade, id) => {
    let item;
    if (id) {
        item = await crud.cadastrar("item", id, { tipo, quantidade });
    } else {
        item = await crud.cadastrar("item", null, { tipo, quantidade });
    }
    return item;
}

const remover = async (id) => {
    crud.remover("item", id);
    return buscarItens();
}

const buscarItens = async () => {
    const listaItems = await crud.buscar("item");
    return listaItems;
}

const buscarItemId = async (id) => {
    const item = await crud.buscarPorId("item", id);
    return item;
}

module.exports = {
    cadastrar,
    remover,
    buscarItens,
    buscarItemId
}