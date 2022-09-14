const crud = require("../../crud");

const cadastrarNotaFiscal = async (numero,id) => {
    let notaFiscal
    if (id) {
        const checarNotaFiscal = await buscarNotaFiscalId(id)

        if(checarNotaFiscal.naoEncontrado){
            return { "Erro": "Id da nota fiscal não encontrado" }
        }
        notaFiscal = await crud.cadastrar("nota-fiscal", id, {numero});
    } else {
        notaFiscal = await crud.cadastrar("nota-fiscal", null, {numero});
    }
    return notaFiscal;
}

const removerNotaFiscal = async (id) => {
    const checarNotaFiscal = await buscarNotaFiscalId(id)

    if(checarNotaFiscal.naoEncontrado){
        return { "Erro": "Id da nota fiscal não encontrado" }
    }
    crud.remover("nota-fiscal", id);
    return buscarNotasFiscais();
}

const buscarNotasFiscais = async () => {
    const listaNotasFiscais = await crud.buscar("nota-fiscal");
    return listaNotasFiscais;
}

const buscarNotaFiscalId = async (id) => {
    const notaFiscal = await crud.buscarPorId("nota-fiscal", id);
    return notaFiscal;
}

module.exports = {
    cadastrarNotaFiscal,
    removerNotaFiscal,
    buscarNotasFiscais,
    buscarNotaFiscalId
}