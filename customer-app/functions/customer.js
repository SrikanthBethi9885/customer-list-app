const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

exports.handler = async (event) => {
  connection.connect();

  const sql = 'SELECT * FROM customers';

  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        connection.end();
        reject(err);
      } else {
        connection.end();
        resolve({
          statusCode: 200,
          body: JSON.stringify(results),
        });
      }
    });
  });
};
