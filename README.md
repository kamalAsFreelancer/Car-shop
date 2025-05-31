# Car-shop
# this is sample page for the components...
const mysql = require('mysql2');

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',       // 🔁 change this
  database: 'your_database_name'  // 🔁 change this
});

// Connect to DB and create the table
connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    return;
  }

  console.log('✅ Connected to MySQL');

  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS cars (
      id INT AUTO_INCREMENT PRIMARY KEY,
      brand VARCHAR(100),
      model VARCHAR(100),
      year INT,
      mileage INT,
      transmission VARCHAR(50),
      fuel_type VARCHAR(50),
      color VARCHAR(50),
      price DECIMAL(10, 2),
      description TEXT,
      images TEXT,  -- Store image filenames (or links if stored on cloud)
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  connection.query(createTableSQL, (err, result) => {
    if (err) {
      console.error('❌ Error creating table:', err.message);
    } else {
      console.log('✅ "cars" table created successfully');
    }

    connection.end();
  });
});


NEXT_PUBLIC_SUPABASE_URL=https://qziackwiglwzyzfuvaak.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aWFja3dpZ2x3enl6ZnV2YWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MDE4MTQsImV4cCI6MjA2MjQ3NzgxNH0.KraFmOQqeSrrVanQvsUfjBWvbrWYIS3WnbFzr18Q3_I
