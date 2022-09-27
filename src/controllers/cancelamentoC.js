const createError = require("http-errors");

const cancelamento = [

    {
        "id": 1,
        "matrícula": "ADS010",
        "status": "Deferido"
    },
    {
        "id": 2,
        "matrícula": "ADS020",
        "status": "Indeferido"
    },
    {
        "id": 3,
        "matrícula": "ADS030",
        "status": "Em análise"
    },
];

function listarCancelamento(req, res, next) {
    res.json(cancelamento);
};

function exibirCancelamentoId(req, res, next) {
    const localizar = cancelamento.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
        return res.status(404).json({ error: "cancelamento não localizada" });
    }
    res.json(localizar);
}

function criarCancelamento(req, res, next) {
    const novoCancelamento = {
        id: cancelamento[cancelamento.length - 1].id + 1,
        matricula: req.body.matricula,
        status: "Em análise"
    }
    cancelamento.push(novoCancelamento);
    res.status(200).json({ msg: 'Cancelamento solicitado com sucesso' });
}

function atualizarCancelamentoId(req, res, next) {
    const cancelamentoLocalizado = cancelamento.find(cancelamento =>
        cancelamento.id === Number(req.params.id)
    );
    if (!cancelamentoLocalizado) {
        return res.status(404).json({ error: 'Solicitação não localizada' });
    }
    cancelamentoLocalizado.nome = req.body.nome;
    res.status(200).json({ msg: 'Solicitação efetuada' });
}

module.exports = { listarCancelamento, exibirCancelamentoId, criarCancelamento, atualizarCancelamentoId };