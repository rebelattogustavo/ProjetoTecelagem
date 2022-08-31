const crud = require("../../crud");

const cadastrarEntradaMaterial = async (descricao, quantidade, valorTotalGasto,
    notaFiscalId, fornecedorId, itemId, id) => {
    let entradaMateriais;
    if (id) {
        entradaMateriais = await crud.cadastrar("entrada-materiais", id, {
            descricao, quantidade, valorTotalGasto,
            notaFiscalId, fornecedorId, itemId
        });
    } else {
        let item = await crud.buscarPorId("item", itemId);
        if (!item.naoEncontrado) {
            let fornecedor = await crud.buscarPorId("fornecedor", fornecedorId);
            if (!fornecedor.naoEncontrado) {
                entradaMateriais = await crud.cadastrar("entrada-materiais", fornecedor.id, {
                    descricao, quantidade,
                    valorTotalGasto, notaFiscalId, fornecedorId, itemId
                });
                return entradaMateriais;
            } else {
                return { "Erro": "Fornecedor não encontrado" }
            }
        } else {
            return { "Erro": "Item não encontrado" }
        }
    }
    return entradaMateriais;
}

const removerEntradaMaterial = async (id) => {
    crud.remover("entrada-materiais", id);
    return buscarEntradaMateriais();
}

const buscarEntradaMateriais = async () => {
    const listaEntradaMateriais = await crud.buscar("entrada-materiais");
    return listaEntradaMateriais;
}

const buscarEntradaMaterialId = async (id) => {
    const entradaMaterial = await crud.buscarPorId("entrada-materiais", id);
    return entradaMaterial;
}

module.exports = {
    cadastrarEntradaMaterial,
    removerEntradaMaterial,
    buscarEntradaMateriais,
    buscarEntradaMaterialId
}