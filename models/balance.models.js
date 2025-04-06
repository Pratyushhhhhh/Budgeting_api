const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  groupId: 
  { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Group', 
    required: true 
},
  payer: { 
    type: String, 
    required: true 
},
  receiver: { 
    type: String, 
    required: true 
},
  amount: { 
    type: Number, 
    required: true,
    default: 0
}
});

const Balance = mongoose.model('Balance', balanceSchema);
module.exports = Balance;
