const createError = require("http-errors");

const usuario = [

    {
        "id": 1,
        "nome": "Jobervan",
        "matrícula": "ADS010",
        "período": "2022/2",
        "turma": "básico 1",
        "faltas": "0",
        "horário de aula": "08h-12h"
    },
    {
        "id": 2,
        "nome": "Pedro Cabral",
        "matrícula": "ADS020",
        "período": "2022/2",
        "turma": "pré-intermediário 2",
        "faltas": "10",
        "horário de aula": "13h-18h"
    },
    {
        "id": 3,
        "nome": "Orvosova Silva",
        "matrícula": "ADS030",
        "período": "2022/2",
        "turma": "intermediário 1",
        "faltas": "7",
        "horário de aula": "19h-22h"
    }
];

function listarUsuario(req, res, next) {
    res.json(usuario);
}

function exibirUsuarioID(req, res, next) {
    const usuarioLocalizado = usuario.find(usuario =>
        usuario.id === Number(req.params.id)
    );
    if (!usuarioLocalizado) {
        return res.status(404).json({ error: 'Usuário não localizado' });
    }
    res.json(usuarioLocalizado);
}

function criarUsuario(req, res, next) {
    const novoUsuario = {
        id: usuario[usuario.length - 1].id + 1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        periodo: req.body.periodo,
        faltas: req.body.faltas,
        horario: req.body.horario
    }
    usuario.push(novoUsuario);
    res.status(200).json({ msg: 'Usuário criado com sucesso' });
}

function atualizarUsuario(req, res, next) {
    const contatoLocalizado = contatos.find(contato =>
        contato.id === Number(req.params.id)
    );
    if (!contatoLocalizado) {
        return res.status(404).json({ msg: 'Contato não localizado' });
    }
    contatoLocalizado.nome = req.body.nome;
    res.status(200).json({ msg: 'Usuário atualizado' });
}
function removerUsuario(req, res, next) {
    const posicaoContato = contatos.findIndex(contato =>
        contato.id === Number(req.params.id));
    if (posicaoContato < 0) {
        return res.status(404).json({ msg: 'Contato não localizado' });
    }
    contatos.splice(posicaoContato, 1);
    res.status(204).end();
}

module.exports = { listarUsuario, exibirUsuarioID, criarUsuario, atualizarUsuario, removerUsuario };