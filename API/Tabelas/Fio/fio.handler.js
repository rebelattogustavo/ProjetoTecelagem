const crud = require("../../crud");

const cadastrarFio = async (descricao,id) => {
    let fio;
    if (id) {
        const checarFio = await buscarFioId(id)
        
        if (checarFio.naoEncontrado) {
            return { "Erro": "Fio inexistente" };
        }

        fio = await crud.cadastrar("fio", id, {descricao});
    } else {
        fio = await crud.cadastrar("fio", null, {descricao});
    }
    return fio;
}

const removerFio = async (id) => {
    const fioMalhaTabela = await crud.buscar("fio-malha");
    const fio = await buscarFioId(id);
 
    if (fio.naoEncontrado) {
        return { "Erro": "Fio inexistente" };
    }
 
    if(fioMalhaTabela.length > 0){
        for(let fioMalha of fioMalhaTabela){
            if(fio.id == fioMalha.id_fio){
                return { "Erro": "Fio atrelado a uma malha!" };
            }
        }
 
        await crud.remover("fio", id)
    } else {
        await crud.remover("fio", id);
    }
 
    return { "Sucesso": `Fio ${fio.descricao}, removido com sucesso!` };
}

const buscarFios = async () => {
    const listaFios = await crud.buscar("fio");
    return listaFios;
}

const buscarFioId = async (id) => {
    const fio = await crud.buscarPorId("fio", id);
    return fio;
}

module.exports = {
    cadastrarFio,
    removerFio,
    buscarFios,
    buscarFioId
}