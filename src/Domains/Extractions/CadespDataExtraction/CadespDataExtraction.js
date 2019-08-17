module.exports = {
    async Teste(req, res) {
        let testeStr = `{"Informações do CPF": ${req.body.cpf}}`
        return res.json(JSON.parse(testeStr))
    }
}