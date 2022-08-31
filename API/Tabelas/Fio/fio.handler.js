const crud = require("../../crud");

const cadastrarFio = async (descricao,id) => {
    let fio;
    if (id) {
        const checarFio = await buscarFioId(id)
<<<<<<< HEAD

=======
        
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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
<<<<<<< HEAD

    if (fio.naoEncontrado) {
        return { "Erro": "Fio inexistente" };
    }

=======
 
    if (fio.naoEncontrado) {
        return { "Erro": "Fio inexistente" };
    }
 
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
    if(fioMalhaTabela.length > 0){
        for(let fioMalha of fioMalhaTabela){
            if(fio.id == fioMalha.id_fio){
                return { "Erro": "Fio atrelado a uma malha!" };
            }
<<<<<<< HEAD
        } 

=======
        }
 
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
        await crud.remover("fio", id)
    } else {
        await crud.remover("fio", id);
    }
<<<<<<< HEAD

    return { "Sucesso": `Cliente ${cliente.nome}, removido com sucesso!` };

=======
 
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
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