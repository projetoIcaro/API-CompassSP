const routes = require('express').Router();
const db = require('../../../db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// configure passport.js to use the local strategy
passport.use(new LocalStrategy(
	{ usernameField: 'user' },
	async (user, password, done) => {
		const { rows } = await db.DaoToDb('SELECT * FROM admin.user WHERE user_name = $1 AND user_pass = $2', [user, password]);
		const userData = rows[0] || null;
		return done(null, userData)
	}
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
	done(null, user.user_code);
});

passport.deserializeUser(async (id, done) => {
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user WHERE user_code = $1', [id]);
	const userData = rows[0] || null;
	done(null, userData);
});

routes.get('/index', async (req, res) => {
	const { rows } = await db.DaoToDb('SELECT * FROM admin.user')
	res.send(rows);
});

routes.post('/index', passport.authenticate('local'), (req, res) => {
		res.send('logged as ' + req.user.user_name);
	}
)

module.exports = routes;
