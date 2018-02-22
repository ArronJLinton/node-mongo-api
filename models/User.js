import mongoose, { Schema } from "mongoose";

// Define movie schema
var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  teams: {
    type: Array,
    required: false
  },
  leagues: {
    type: Array,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "Media" }]
});

// Export Mongoose model
const User = mongoose.model("User", UserSchema);

module.exports = User;
