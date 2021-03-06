const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define media schema
var MediaSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: false
  },
  matchId: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const Media = mongoose.model("Media", MediaSchema);

// Export Mongoose model
module.exports = Media;