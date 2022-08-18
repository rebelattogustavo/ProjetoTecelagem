const crud = require("../../crud");

const cadastrarFuncionario = async (cpf, dataNascimento, nome, salario, turno, id) => {
    let novoFuncionario;
    if (id) {

        const funcionario = await buscarFuncionarioId(id);
        if(funcionario.naoEncontrado){
            return {"Erro": "Funcionário não encontrado"};
        }

        novoFuncionario = await crud.cadastrar("funcionario", id, { cpf, dataNascimento, nome, salario, turno });
    } else {
        novoFuncionario = await crud.cadastrar("funcionario", null, { cpf, dataNascimento, nome, salario, turno });
    }
    return novoFuncionario;
}

const removerFuncionario = async (id) => {
    let func = await buscarFuncionarioId(id);

    console.log(func);

    if (!func.naoEncontrado) {
        await crud.remover("funcionario", id);
    } else {
        return { "Erro": "Funcionário inexistente" };
    }
    return { "Sucesso": `Funcionário ${func.nome}, removido com sucesso!` };
}

const buscarFuncionarios = async () => {
    const listaFuncionario = await crud.buscar("funcionario");
    return listaFuncionario;
}

const buscarFuncionarioId = async (id) => {
    const funcionario = await crud.buscarPorId("funcionario", id);
    return funcionario;
}

module.exports = {
    cadastrarFuncionario,
    removerFuncionario,
    buscarFuncionarios,
    buscarFuncionarioId
}