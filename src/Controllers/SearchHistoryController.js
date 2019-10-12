const express = require('express');
const SearchHistory = require('../Models/SearchHistory');
const router = express.Router();

/* Registra um novo usuário */
router.post('/register', async (req, res) => {

    try{
        const searchHistory = await SearchHistory.create(req.body);

        return res.send({ searchHistory });
    }catch(err){
        return res.status(400).send({ error: 'Registration Failed'})
    }
});

module.exports = app => app.use('/SearchHistory', router);