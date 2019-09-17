const routes = require('express').Router();

routes.use((req, res, next) => {
  next();
})

routes.use("/investigation", require('./investigation/routes'));
routes.use("/login", require('./login'));
routes.use("/logout", require('./logout'));
routes.use("/user", require('./user'));
routes.use("/config", require('./config'));

module.exports = routes;
