const axios = require('axios')

module.exports = {
    async Teste(req, res) {
        let testeStr = `{"Informações do CPF": ${req.body.cpf}}`
        return res.json(JSON.parse(testeStr))
    },

    async GetDataSiel(req, res) {
        if(!req.body.cpf == "" && !req.body.nome == ""){

            let cpf = req.body.cpf
            let nome = req.body.nome
            
            await axios.post('http://localhost:3002/api/Siel/GetData', {
                cpf: cpf,
                nome: nome
            })
            .then((response) => {
                return res.json(response.data)
            })
            .catch((error) => {
                return res.json(JSON.parse(`{"error":${error}}`))
            })
        }
        
        return res.json(JSON.parse(`{"error":"CPF/Nome Vazio"}`))
    }
}




