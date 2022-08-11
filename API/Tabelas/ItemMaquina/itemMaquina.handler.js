const crud = require("../../crud");

const cadastrarItemMaquina = async (arquivo , id) => {
    let itemMaquina;
    if (id) {
        itemMaquina = await crud.cadastrar("item-maquina", id, { arquivo });
    } else {
        itemMaquina = await crud.cadastrar("item-maquina", null, { arquivo });
    }
    return itemMaquina;
}

const removerItemMaquina = async (id) => {
    crud.remover("item-maquina", id);
    return buscarItemMaquina();
}

const buscarItemMaquina = async () => {
    const listaItemMaquina = await crud.buscar("item-maquina");
    return listaItemMaquina;
}

const buscarItemMaquinaId = async (id) => {
    const itemMaquina = await crud.buscarPorId("item-maquina", id);
    return itemMaquina;
}

module.exports = {
    cadastrarItemMaquina,
    removerItemMaquina,
    buscarItemMaquina,
    buscarItemMaquinaId
}