const crud = require("../../crud");

const cadastrar = async (tipo, quantidade, id) => {
    let item;
    if (id) {
        item = crud.cadastrar("item", id, { tipo, quantidade });
    } else {
        item = crud.cadastrar("item", null, { tipo, quantidade });
    }
    return item;
}

const remover = async (id) => {
    crud.remover("cliente", id);
    return buscar();
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