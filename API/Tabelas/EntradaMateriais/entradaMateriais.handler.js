const crud = require("../../crud");

const cadastrarEntradaMaterias = async (descricao, quantidade, valorTotalGasto, 
    notaFiscalId, fornecedorId, itemId, id) => {
    let entradaMateriais;
    if (id) {
        entradaMateriais = await crud.cadastrar("entrada-materiais", id, { descricao, quantidade, valorTotalGasto, 
            notaFiscalId, fornecedorId, itemId });
    } else {
        entradaMateriais = await crud.cadastrar("entrada-materiais", null, { descricao, quantidade, valorTotalGasto, 
            notaFiscalId, fornecedorId, itemId });
    }
    return entradaMateriais;
}

const removerEntradaMaterias = async (id) => {
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
    cadastrarEntradaMaterias,
    removerEntradaMaterias,
    buscarEntradaMateriais,
    buscarEntradaMaterialId
}