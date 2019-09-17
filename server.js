const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const passport = require('passport');

const app = express()

app.use(session({
    store: new FileStore(),
    secret: '3dfd43a044d2a16ae9d47e8c22c02cff6507996cbd60c2b06034d22e8591b044a9adafa3b8f97675b2a49217cf70723a18bed5d59fa0621ea3ce6fb49bc08b2b',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())
app.use(express.urlencoded( { extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3052'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use("/api", require('./src/routes'))
app.use("/", require('./src/Site/routes'))

app.listen(3001, () => {
    console.log("Compass SP API - iniciada na porta 3001");
});
