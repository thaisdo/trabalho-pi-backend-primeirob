const { spawn } = require('child_process');
const express = require('express');
const createError = require('http-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
var indexRouter = require('./src/routes/indexRoutes');

var routerUsuario = require('./src/routes/usuarioR');
var routerCobranca = require('./src/routes/cobrancaR');
var routerCancelamento = require('./src/routes/cancelamentoR');
var routerServicos = require('./src/routes/servicosR');

app.use(express.json());
app.use('/', indexRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/usuario', routerUsuario);
app.use('/cobranca', routerCobranca);
app.use('/cancelamento', routerCancelamento);
app.use('/servicos', routerServicos);

module.exports = app;