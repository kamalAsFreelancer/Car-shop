const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql302.infinityfree.com',
  user: 'if0_39094242',
  password: 'KPRdIxr2gioIp8',  // change this
  database: 'if0_39094242_vlog'  // change this
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
  
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

module.exports = connection;
