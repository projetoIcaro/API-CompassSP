const routes = require('express').Router();

routes.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(401)
  }
})

routes.use("/dashboard", require('./dashboard'));
routes.use("/search", require('./search'));
routes.use("/history", require('./history'));

module.exports = routes;
