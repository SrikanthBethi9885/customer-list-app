const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
});

exports.handler = async (event) => {
  // Enable CORS for all origins
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
  };

  // Check the request method to handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Handle the GET request
  if (event.httpMethod === 'GET') {
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
            headers,
            body: JSON.stringify(results),
          });
        }
      });
    });
  }

  return {
    statusCode: 405,
    headers,
    body: 'Method Not Allowed',
  };
};
