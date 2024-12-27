const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long request processing time
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000);
  //Handle potential errors
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 500;
    res.end();
  });
  //Ensure the response ends
  res.on('finish',()=>{
      console.log('response ended')
  })
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});