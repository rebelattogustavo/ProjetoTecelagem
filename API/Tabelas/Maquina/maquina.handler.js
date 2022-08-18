const crud = require("../../crud");

const cadastrarMaquina = async (nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
    qtdPlatina, qtdGaiolas, qtdCones, id) => {
    let maquina;
    if (id) {
        maquina = await crud.cadastrar("maquina", id, {
            nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones
        });
    } else {
        maquina = await crud.cadastrar("maquina", null, {
            nome, marca, anoFabricacao, anoCompra, valorCompra, rpm, qtdAgulha,
            qtdPlatina, qtdGaiolas, qtdCones
        });
    }
    return maquina;
}

const removerMaquina = async (id) => {
    const producoes = await crud.buscar("producao");
    console.log(producoes);
    for (let producao of producoes) {
        if (producao.maquinaId == id && producao.status.toLowerCase() == "em espera") {
            return { "Erro": "Impossível remover! A máquina está em espera de produção" };
        }else if(producao.maquinaId == id && producao.status.toLowerCase() == "em produção"){
            return { "Erro": "Impossível remover! A máquina está em produção" };
        }
    }
    await crud.remover("maquina", id);
    return { "Sucesso": "Maquina removida com sucesso!" };

}

const buscarMaquinas = async () => {
    const listaMaquinas = await crud.buscar("maquina");
    return listaMaquinas;
}

const buscarMaquinaId = async (id) => {
    const maquina = await crud.buscarPorId("maquina", id);
    return maquina;
}

module.exports = {
    cadastrarMaquina,
    removerMaquina,
    buscarMaquinas,
    buscarMaquinaId
}