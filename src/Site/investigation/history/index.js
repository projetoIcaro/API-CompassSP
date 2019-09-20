const routes = require('express').Router();

routes.get('/', (req, res) => {
	const isLogged = res.locals.isLogged;
	res.send({isLogged});
});

module.exports = routes;
