const axios = require('axios');

module.exports = {
	async GetDataSiel(req, res) {
		console.log(req.query);
		let cpf = req.query.cpf;
		let nome = req.query.nome;
		await axios.post('http://localhost:3002/api/Siel/GetData', {cpf, nome})
		.then(res => res.data)
		.catch(err => res.json({err}));
	}
};
