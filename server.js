const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const passport = require('passport');
require('events').EventEmitter.setMaxListeners = 0;

const app = express()

app.use(session({
    store: new FileStore(),
    secret: '3dfd43a044d2a16ae9d47e8c22c02cff6507996cbd60c2b06034d22e8591b044a9adafa3b8f97675b2a49217cf70723a18bed5d59fa0621ea3ce6fb49bc08b2b',
    resave: false,
    saveUninitialized: true
}))

var corsOptions = {
    "credentials": true,
    "origin": "http://localhost:3052",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(cors(corsOptions));

require('./src/Controllers/UserController')(app);
require('./src/Controllers/SearchHistoryController')(app);
app.use("/api", require('./src/routes'))
app.use("/", require('./src/Site/routes'))

app.listen(3001, () => {
    console.log("Compass SP API - iniciada na porta 3001");
});
