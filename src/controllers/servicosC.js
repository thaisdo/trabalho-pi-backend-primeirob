const createError = require("http-errors");

const servicos = [

    {
        "id": 1,
        "turma": "básico 1",
        "material": "Básico 1, 2 e 3 – English File Elementary Fourth Edition – Students Book + Workbook – Editora: Oxford"
    },
    {
        "id": 2,
        "turma": "pré-intermediário 2",
        "material": "Pré-Intermediário 1, 2  e 3 – English File Pre-Intermediate Fourth Edition – Student's Book + Workbook – Editora: OXFORD" 
    },
    {
        "id": 3,
        "turma": "intermediário 1",
        "material": "Intermediário 1, 2 e 3 – English File Intermediate Fourth Edition – Students Book + Workbook – Editora: OXFORD"
    }
];

function listarServicos(req, res, next) {
    res.json(servicos);
};

function exibirServicosId(req, res, next) {
    const localizar = servicos.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ Error: "Serviço não localizado" });
    }
    res.json(localizar);
};

function atualizarServicosId(req, res, next) {
    const localizar = servicos.find(
      (servicos) => servicos.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ Msg: "Serviço não localizado" });
    }
    localizar.turma = req.body.turma;
    localizar.material =  req.body.material;
    res.status(200).json({ Error: "Serviço atualizado com sucesso!" });
  }

module.exports = { listarServicos, exibirServicosId, atualizarServicosId };