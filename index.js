const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql');

const server = http.createServer((req, res) => {

  // Path of file
  let filePath = '';

  switch (req.url) {
    case '/':
      filePath = path.join(__dirname, 'public', 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'public', 'about.html');
      break;
    default:
      filePath = path.join(__dirname, 'public', req.url);
      break;
  }

  console.log(filePath);
  
  // Extension of file
  let extname = path.extname(filePath);

  console.log(extname);
  
  // Initial content type
  let contentType = 'text/html';

  // Check extension and set content type
  switch (extname) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Page not found
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const mysqlConnection = mysql.createConnection({
  host: "db4free.net",
  user: "demonsgalore",
  password: "pass1234",
  database: "demonsgalore",
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected!");
  } else {
    console.log("Connection failed!");
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/////////////////////////////////////////////////












const serverOLD = http.createServer((req, res) => {
  /*   console.log(req.url);
    if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });
    }
  
    if (req.url === '/about') {
      fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      });
    }
  
    if (req.url === '/api/users') {
      const users = [
        { name: 'John Doe', age: 23 },
        { name: 'Sarah Silver', age: 20 }
      ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } */
  
    // Build filepath
    // let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url);
    let filePath = path.join(__dirname, 'public', req.url);
    console.log(filePath);
    console.log(req.url);
  
    // Extension of file
    let extname = path.extname(filePath);
    
    // Initial content type
    let contentType = 'text/html';
  
    // Check extension and set content type
    switch (extname) {
      case '.css':
        contentType = 'text/css';
        break;
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
    }
  
    // Read file
    fs.readFile(filePath, (err, content) => {
      if (err) {
        // Page not found
        if (err.code === 'ENOENT') {
          fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          });
        } else {
          // Some server error
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        // Successful response
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf8');
      }
    });
  });
  
  
  
  function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
      if (error) {
        response.writeHead(404);
        response.write('File not found!');
      } else {
        response.write(data);
      }
      response.end();
    });
  }
  
  const serverNEW = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
  
    const path = url.parse(req.url).pathname;
  
    switch (path) {
      case '/':
        renderHTML('./public/index.html', res);
        break;
      case '/about':
        renderHTML('./public/about.html', res);
        break;
      default:
        res.writeHead(404);
        renderHTML('./public/404.html', res);
    }
  });