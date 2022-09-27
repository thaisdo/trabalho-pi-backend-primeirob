const createError = require("http-errors");

function indexRouter(req, res, next) {
    res.json("API - da Schoola");
  }

  module.exports = {indexRouter}