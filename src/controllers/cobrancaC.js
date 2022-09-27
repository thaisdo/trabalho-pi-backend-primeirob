const createError = require("http-errors");

const cobranca = [

    {
        "id": 1,
        "cobranca": "01",
        "vencimento": "01/01/2022",
        "valor": "500.00",
        "situacao": "Pago"
    },
    {
        "id": 2,
        "cobranca": "02",
        "vencimento": "01/01/2023",
        "valor": "750.00",
        "situacao": "Em atraso"
    },
    {
        "id": 3,
        "cobranca": "03",
        "vencimento": "01/02/2023",
        "valor": "1000.00",
        "situacao": "Em atraso"
    }
];

function listarCobranca(req, res, next) {
    res.json(cobranca);
};

function exibirCobrancaId(req, res, next) {
    const localizar = cobranca.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ Error: "Cobrança não localizada" });
    }
    res.json(localizar);
};

function atualizarCobrancaId(req, res, next) {
    const localizar = cobranca.find(
      (cobranca) => cobranca.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ Msg: "Cobrança não localizada" });
    }
    localizar.cobranca = req.body.cobranca;
    localizar.vencimento = req.body.vencimento;
    localizar.valor = req.body.valor;
    localizar.situacao = req.body.situacao;
    res.status(200).json({ Error: "Cobrança atualizada com sucesso!" });
  }

module.exports = { listarCobranca, exibirCobrancaId, atualizarCobrancaId };