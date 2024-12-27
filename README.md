# Node.js Server Hang Due to Long Request Processing

This repository demonstrates a common issue in Node.js servers where requests taking a long time to process can cause the server to hang or become unresponsive.  The problem stems from not properly managing the response and exceeding the default timeout.

## Bug

The `bug.js` file contains a simple HTTP server that simulates a long request processing time using `setTimeout`.  Without properly handling the response, the server fails to end the response, leading to a hang.

## Solution

The `bugSolution.js` file provides a solution by ensuring that the response is always ended, even if there's an error during processing.  This prevents the server from hanging and ensures it remains responsive.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Access the server (e.g., through a browser) and wait for a long time without receiving a response.  This should block further requests. (You can use a tool like curl or Postman to observe it more easily)
5. Run `node bugSolution.js` which will correctly handle requests, regardless of their processing time.