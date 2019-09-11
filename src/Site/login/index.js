const routes = require('express').Router();
const db = require('../../../db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
	async (username, password, done) => {
		const { rows } = await db.DaoToDb('SELECT * FROM admin.user WHERE user_name = $1 AND user_pass = $2', [username, password]);
		const userData = rows[0] || null;
		return done(null, userData)
	}
));

passport.serializeUser((user, done) => {
	done(null, user.user_code);
});

passport.deserializeUser(async (id, done) => {
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user WHERE user_code = $1', [id]);
	const userData = rows[0] || null;
	done(null, userData);
});

routes.get('/', async (req, res) => {
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user')
	res.send(rows);
});

routes.post('/', passport.authenticate('local'), (req, res) => {
		res.send('logged as ' + req.user.user_name);
	}
)

module.exports = routes;
