const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Point = require('./models/point');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/geodb');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/points', async (req, res) => {
  const points = await Point.find();
  res.json(points);
});

app.post('/api/points', async (req, res) => {
  const { lat, lng, data } = req.body;
  const point = new Point({ lat, lng, data });
  await point.save();
  res.json(point);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
