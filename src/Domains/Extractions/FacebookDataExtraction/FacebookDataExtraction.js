module.exports = {
    async Teste(req, res) {
        if(!req.body.cpf == ""){
            let testeStr = `{"Informações do CPF": ${req.body.cpf}}`
            return res.json(JSON.parse(testeStr))
        }

        return res.json(JSON.parse(`{"error":"CPF Vazio"}`))
    }
}