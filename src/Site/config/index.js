const routes = require('express').Router();

routes.get('/', async (req, res) => {
	if (req.isAuthenticated()) {
		res.send(req.user);
	} else {
		res.send({});
	}
});

module.exports = routes;
