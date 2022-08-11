const crud = require("../../crud");

const cadastrarItem = async (tipo, quantidade, id) => {
    let item;
    if (id) {
        item = await crud.cadastrar("item", id, { tipo, quantidade });
    } else {
        item = await crud.cadastrar("item", null, { tipo, quantidade });
    }
    return item;
}

const removerItem = async (id) => {
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
    cadastrarItem,
    removerItem,
    buscarItens,
    buscarItemId
}