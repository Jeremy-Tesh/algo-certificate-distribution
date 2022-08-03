const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optinSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  assetId: { type: Number, required: true },
  account: { type: String, required: true },
}, {
  timestamps: true,
});

const Optin = mongoose.model('Optin', optinSchema);

module.exports = Optin;