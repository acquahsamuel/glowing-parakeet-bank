const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  AccountName: {
    type: String,
    required: true,
  },
  BankBalance: {
    type: String,
    required: true,
  },
  BankFeedsAccountId: {
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  },
  StartingAmount: {
    type: String,
    required: true,
  },

  StartingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', accountSchema);
