const routes = require('express').Router();

routes.get('/', async (req, res) => {
	req.logout();
	res.send('Logout')
});

module.exports = routes;
