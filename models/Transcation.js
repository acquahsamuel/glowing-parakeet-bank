const mongoose = require('mongoose');

const transcationSchema = mongoose.Schema({
  AccountName: {
    type: String,
    required: true,
  },
  BankBalance: {
    type: Number,
    required: true,
  },
 
  TransferedTo: {
    type: String,
    required: true,
  },
 
  TransferedAmount: {
    type: Number,
    required: true,
  },
 
  

  transferedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transcation', transcationSchema);
