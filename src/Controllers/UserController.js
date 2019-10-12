const express = require('express');

const User = require('../Models/User');

const router = express.Router();

/* Registra um novo usuário */
router.post('/register', async (req, res) => {

    const { login } = req.body;

    try{
        if (await User.findOne({ login }))
            return res.status(400).send({ error :'Login já existe.'})

        const user = await User.create(req.body);

        return res.send({ user });
    }catch(err){
        return res.status(400).send({ error: 'Registration Failed'})
    }
});

/* Valida Login */
router.post('/validateUser', async (req, res) => {

    const { login, password } = req.body;

    try{
        const user = await User.findOne({ login, password});

        if(user == null)
            return res.status(400).send({ error: 'Usuário não encontrado'})

        return res.send({ user });
    }catch(err){
        return res.status(400).send({ error: 'Search Failed'})
    }
});

/* Lista todos os usuários */
router.get('/users', async (req, res) => {
    try{
        const users = await User.find();

        return res.send({ users });
    }catch(err){
        return res.status(400).send({ error: 'Search Failed'})
    }
});



module.exports = app => app.use('/User', router);