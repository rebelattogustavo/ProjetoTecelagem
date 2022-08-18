const crud = require("../../crud");

const cadastrarProducao = async (pesoRolo, defeito, clienteId, funcionarioId, maquinaId, status, id) => {
    console.log("peso: ", pesoRolo, "def: ", defeito, "cliente: ", clienteId, "func: ", funcionarioId, 
    "maq: ", maquinaId, "stats: ", status, "id: ", id);
    let producao;
    if (id) {
        producao = await crud.cadastrar("producao", id, { pesoRolo, defeito, clienteId, funcionarioId, 
            maquinaId, status });
    } else {
        let maquina = await crud.buscarPorId("maquina", maquinaId);

        console.log(maquina);
    
        if (!maquina.naoEncontrado) {
            producao = await crud.cadastrar("producao", null, { pesoRolo, defeito, clienteId, funcionarioId, 
                maquinaId, status: "em produção" });
        } else {
            return { "Erro": "Maquina inexistente" };
        }
        return { "Sucesso": `Produção cadastrada com sucesso!` };

    }
    return producao;
}

const removerProducao = async (id) => {
    crud.remover("producao", id);
    return buscarProducoes();
}

const buscarProducoes = async () => {
    const listaProducao = await crud.buscar("producao");
    return listaProducao;
}

const buscarProducaoId = async (id) => {
    const producao = await crud.buscarPorId("producao", id);
    return producao;
}

module.exports = {
    cadastrarProducao,
    removerProducao,
    buscarProducoes,
    buscarProducaoId
}
