const crud = require("../../crud");

const cadastrarEntradaMaterial = async (descricao, quantidade, valorTotalGasto, 
    notaFiscalId, fornecedorId, itemId, id) => {
    let entradaMateriais;
    if (id) {
        const checarEntrada = await buscarEntradaMaterialId(id)

        if (checarEntrada.naoEncontrado) {
            return { "Erro": "Id de máquina fio não encontrado" }
        }
        entradaMateriais = await crud.cadastrar("entrada-materiais", id, { descricao, quantidade, valorTotalGasto, 
            notaFiscalId, fornecedorId, itemId });
    } else {
        let nota = await crud.buscarPorId("nota-fiscal", notaFiscalId);
        if(nota.naoEncontrado){
            return {"Erro": "Nota não encontrada!"}
        }
        let fornecedor = await crud.buscarPorId("fornecedor", fornecedorId);
        if(fornecedor.naoEncontrado){
            return {"Erro": "Fornecedor não encontrado!"}
        }
        let item = await crud.buscarPorId("item",itemId);
        if(item.naoEncontrado){
            return {"Erro": "Item não encontrado!"}
        }
        entradaMateriais = await crud.cadastrar("entrada-materiais", null, { descricao, quantidade, valorTotalGasto, 
            notaFiscalId, fornecedorId, itemId });
        
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