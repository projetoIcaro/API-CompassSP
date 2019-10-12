const mongoose = require('../DataBase');
const mongoosePaginate = require('mongoose-paginate');

const SearchHistorySchema = new mongoose.Schema({
    searchDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    searchAverage: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
    },
    searchType: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    resultSearch: {
        type: Object,
        required: true,
    }
});

SearchHistorySchema.plugin(mongoosePaginate);

const SearchHistory = mongoose.model("SearchHistory", SearchHistorySchema);

module.exports = SearchHistory;