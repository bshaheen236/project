const mongoose = require('mongoose');

const goldTrade = new mongoose.Schema({

    quantity : {
        type : Number,
        require : true
    },

    price : {
        type : Number,
        require : true
    },
    
    trade_amount :{
        type : Number,
        require : true
    },
});

module.exports = mongoose.model('goldTradeMacanism',goldTrade)

