const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // because the response is not ended.
  // res.end();

  // Simulate a long request processing time
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});