const routes = require('express').Router();

routes.use("/login", require('./login'));

routes.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  res.end();
});

routes.use("/investigation", require('./investigation/routes'));
routes.use("/logout", require('./logout'));
routes.use("/user", require('./user'));
routes.use("/config", require('./config'));

module.exports = routes;
