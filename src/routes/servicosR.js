var express = require('express');
var router = express.Router();

const servicosController = require('../controllers/servicosC')
const app = express();

// get lista todos os serviços
router.get('/', servicosController.listarServicos);  

// get ID exibe um serviço pelo ID
router.get('/:id', servicosController.exibirServicosId);

// put ID atualiza um serviço pelo ID
router.put('/:id', servicosController.atualizarServicosId);

module.exports = router;