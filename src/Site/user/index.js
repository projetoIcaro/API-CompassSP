const routes = require('express').Router();
const db = require('../../../db');

routes.get('/index', async (req, res) => {
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user')
	res.send(rows);
});

module.exports = routes;
