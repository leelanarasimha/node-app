const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return setHomePage(req, res);
  }

  if (req.url === '/username' && req.method.toLowerCase() === 'post') {
    return submitUserName(req, res);
  }
});

function submitUserName(req, res) {
  res.setHeader('Content-Type', 'text/html');
  //receive request body
  //save it in file
  //redirect to home page

  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}

function setHomePage(req, res) {
  res.setHeader('Content-Type', 'text/html');
  return res.end(`
  <!doctype html>
  <html>
  <head>
  <title>Leela Web Dev</title>
  </head>
  <body>
  <form action="/username" method="post">
  <div>
  <label>Enter User name</label>
    <input type="text" name="username"/>
  </div>
  <div>
  <input type="submit" value="send"/>
  </div>
  </form>
  </body>
  </html>
  `);
}

server.listen(3000);
