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
});

module.exports = connection;
