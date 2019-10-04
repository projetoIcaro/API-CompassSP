const PDFDocument = require('pdfkit')
const moment = require('moment')
const fs = require('fs');


module.exports = {
	async Generate(req, res) {
		let arrayAPIS = req.body.APIS;
		const doc = new PDFDocument();

		res.setHeader('Content-disposition', 'attachment; filename="' + 'ExtratoResumo_' + moment().format('DDMMYYYY') + '.pdf' + '"')
		res.setHeader('Content-type', 'application/pdf')
		  
		doc.y = 150;

		//Loop APIS
		arrayAPIS.map( API => {
			doc.text(`Nome da API: ${API.NomeAPI}`)
			doc.text(`Descrição da API: ${API.DescricaoAPI}`)
			doc.text(`------------ Campos ------------`)

			for (var campo in API.Campos) {
				doc.text(`${campo} : ${API.Campos[campo]}`)
			}

			doc.text(`------------------------------`)
		})

		/* Enviar na chamada de volta o arquivo */
		//doc.pipe(res)
		//doc.end()

		/* Gera o arquivo localmente */
		doc.pipe(fs.createWriteStream(`ExtratoResumo_${moment().format('DDMMYYYY')}_${moment().format('HHmmSS')}.pdf`))
		doc.end()		

		res.send({"Status":"sucesso"})
	}
};











