const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const connection = require('./src/firebase'); // path to your db.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// POST: Insert car data
app.post('/api/cars', upload.array('images', 5), (req, res) => {
  const {
    brand, model, year, mileage,
    transmission, fuel_type, color, price, description
  } = req.body;

  const imageFilenames = req.files.map(file => file.filename).join(',');

  const query = `
    INSERT INTO cars (brand, model, year, mileage, transmission, fuel_type, color, price, description, images)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    brand, model, parseInt(year), parseInt(mileage),
    transmission, fuel_type, color, parseFloat(price), description, imageFilenames
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('❌ Error inserting car:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ success: true, message: 'Car posted successfully' });
  });
});

app.listen(PORT, () => console.log(`🚗 Server running on http://localhost:${PORT}`));
