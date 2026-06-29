const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  sectionKey: { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true }, // Can be string, array, or object
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Content', ContentSchema);