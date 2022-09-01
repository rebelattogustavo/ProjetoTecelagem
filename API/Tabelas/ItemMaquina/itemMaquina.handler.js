const crud = require("../../crud");

const cadastrarItemMaquina = async (idItem, idMaquina, id) => {
    let itemMaquina;

    const item = await crud.buscarPorId("item", idItem);
    const maquina = await crud.buscarPorId("maquina", idMaquina);

    if(!item.naoEncontrado && !maquina.naoEncontrado){
        if (id) {
            itemMaquina = await crud.cadastrar("item-maquina", id, { idItem, idMaquina });
        } else {
            itemMaquina = await crud.cadastrar("item-maquina", null, { idItem, idMaquina });
        }
    } else {
        return { "Erro": "Item e/ou Maquina não existem!" };
    }

    return itemMaquina;
}

const removerItemMaquina = async (id) => {
    crud.remover("item-maquina", id);
    return buscarItensMaquinas();
}

const buscarItensMaquinas = async () => {
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
    buscarItensMaquinas,
    buscarItemMaquinaId
}