const crud = require("../../crud");

const cadastrar = async (cpf, dataNascimento, nome, salario, turno, id) => {
    if (id) {
        await crud.cadastrar("funcionario", id, { cpf, dataNascimento, nome, salario, turno });
    } else {
        await crud.cadastrar("funcionario", null, { cpf, dataNascimento, nome, salario, turno });
    }
    return buscarFuncionarios();
}

const remover = async (id) => {
    crud.remover("funcionario", id);
    return buscar();
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
    cadastrar,
    remover,
    buscarFuncionarios,
    buscarFuncionarioId
}