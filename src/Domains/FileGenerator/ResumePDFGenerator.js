

module.exports = {
	async Generate(req, res) {
		let arrayAPIS = req.body.APIS;

		//Loop APIS
		arrayAPIS.map( API => {
			console.log(`Nome da API: ${API.NomeAPI}`);
			console.log(`Descricao da API: ${API.DescricaoAPI}`);
			console.log(`Inicializando montagem de campos dinamicos`);

			for (var campo in API.Campos) {
				console.log(`${campo} : ${API.Campos[campo]}`);
			}

			console.log(`Fim API - ${API.NomeAPI}`);
		})

		res.send({"Status":"sucesso"})
	}
};











