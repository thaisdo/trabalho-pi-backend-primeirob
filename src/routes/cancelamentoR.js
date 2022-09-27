var express = require('express');
var router = express.Router();

const cancelamentoController = require('../controllers/cancelamentoC')
const app = express();

router.get('/', cancelamentoController.listarCancelamento);  

router.get('/:id', cancelamentoController.exibirCancelamentoId);

router.post('/', cancelamentoController.criarCancelamento);

router.put('/:id', cancelamentoController.atualizarCancelamentoId);

module.exports = router;