var express = require('express');
var router = express.Router();

const cobrancaController = require('../controllers/cobrancaC')
const app = express();

// get lista todos os contatos
router.get('/', cobrancaController.listarCobranca);  

// get ID exibe um contato pelo ID
router.get('/:id', cobrancaController.exibirCobrancaId);

router.put('/:id', cobrancaController.atualizarCobrancaId);

module.exports = router;