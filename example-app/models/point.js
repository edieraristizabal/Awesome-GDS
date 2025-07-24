const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  data: String
});
module.exports = mongoose.model('Point', PointSchema);
