const crud = require("../../crud");

const cadastrarItem = async (tipo, quantidade, id) => {
    let item;
    if (id) {
        const itemChecar = await buscarItemId(id);

        if (itemChecar.naoEncontrado) {
            return { "Erro": "Item inexistente" };
        }

        item = await crud.cadastrar("item", id, { tipo, quantidade });
    } else {
        item = await crud.cadastrar("item", null, { tipo, quantidade });
    }
    return item;
}

const removerItem = async (id) => {
    const item = await buscarItemId(id);
    const itemMaquina = await crud.buscar("item-maquina");

    if (!item.naoEncontrado) {
        for (let maq of itemMaquina) {
            if (item.id == maq.idItem) {
                const objDeletado = await crud.remover("item-maquina", maq.id);
            }
        }
        await crud.remover("item", id);
    } else {
        return { "Erro": "Item inexistente" };
    }

    return { "Sucesso": `Item removido com sucesso!` };
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