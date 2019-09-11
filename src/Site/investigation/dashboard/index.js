const routes = require('express').Router();

routes.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		res.send('logged as ' + req.user.user_name)
	} else {
		res.send('you hit the authentication uc\n')
	}
});

module.exports = routes;
