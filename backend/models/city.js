const mongoose = require("mongoose");

const cityModel = mongoose.Schema({
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("cityModel", cityModel);
