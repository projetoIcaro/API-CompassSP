const routes = require('express').Router();
const db = require('../../../db');

routes.post('/index', async (req, res) => {
	res.send({sla: 2});
});

module.exports = routes;
