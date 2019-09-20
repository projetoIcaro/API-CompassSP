const routes = require('express').Router();

routes.get('/', async (req, res) => {
	req.logout();
	res.send({isLogged: false})
});

module.exports = routes;
