const routes = require('express').Router();
const db = require('../../../db');

routes.get('/', async (req, res) => {
	const isLogged = res.locals.isLogged;
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user')
	res.send({isLogged, rows});
});

routes.post('/', async (req, res) => {
	const isLogged = res.locals.isLogged;
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user')
	res.send({isLogged, rows});
});

module.exports = routes;
