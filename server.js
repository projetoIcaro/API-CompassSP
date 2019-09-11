const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const passport = require('passport');

const app = express()

app.use(session({
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use("/api", require('./src/routes'))
app.use("/user", require('./src/Site/user'))
app.use("/login", require('./src/Site/login'))
app.use("/investigation", require('./src/Site/investigation'))

app.listen(3001, () => {
    console.log("Compass SP API - iniciada na porta 3001");
});
