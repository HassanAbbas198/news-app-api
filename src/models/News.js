const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('News', newsSchema);
