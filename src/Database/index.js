const mongoose = require('mongoose');
require('custom-env').env(true);

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, {useNewUrlParser: true});

module.exports = mongoose;