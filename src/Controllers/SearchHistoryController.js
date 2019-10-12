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

router.get('/list', async (req, res) => {
    try{
        const historys = await SearchHistory.find();

        return res.send({ historys });
    }catch(err){
        return res.status(400).send({ error: 'Search Failed'})
    }
});

router.get('/listPaginated', async (req, res) => {
    const { page = 1, limit = 5} = req.query;
    

    try{
        const historys = await SearchHistory.paginate({ /* Wheres */}, {page, limit: limit});

        return res.send({ historys });
    }catch(err){
        return res.status(400).send({ error: 'Search Failed'})
    }
});

module.exports = app => app.use('/SearchHistory', router);