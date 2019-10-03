const routes = require('express').Router();

routes.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({});
  }
});

routes.use("/dashboard", require('./dashboard'));
routes.use("/search", require('./search'));
routes.use("/history", require('./history'));
routes.use("/result", require('./result'));

module.exports = routes;
