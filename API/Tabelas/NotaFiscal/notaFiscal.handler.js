const crud = require("../../crud");

const cadastrarNotaFiscal = async ({arquivo},id) => {
    let notaFiscal
    if (id) {
        notaFiscal = await crud.cadastrar("nota-fiscal", id, {arquivo});
    } else {
        notaFiscal = await crud.cadastrar("nota-fiscal", null, {arquivo});
    }
    return notaFiscal;
}

const removerNotaFiscal = async (id) => {
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