const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use("/api", require('./src/routes'))
app.use("/user", require('./src/Site/user'))
app.use("/login", require('./src/Site/login'))

app.listen(3001, () => {
    console.log("Compass SP API - iniciada na porta 3001");
});


