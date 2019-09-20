const routes = require('express').Router();

routes.use("/workspace", require('./workspace'));
routes.use("/search", require('./search'));
routes.use("/history", require('./history'));

module.exports = routes;
