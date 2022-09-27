const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexControllers');

const app = express();
router.get('/', indexControllers.indexRouter)

module.exports = router;