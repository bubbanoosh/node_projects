/* ## HTTP CLIENT (Exercise 7 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  'data' event from the response to a new line on the console (stdout).  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  For this exercise you will need to use the http core module.  
   
  Documentation on the http module can be found by pointing your browser  
  here:  
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html  
   
  The http.get() method is a shortcut for simple GET requests, use it to  
  simplify your solution. The first argument to http.get() can be the URL  
  you want to GET; provide a callback as the second argument.  
   
  Unlike other callback functions, this one has the signature:  
   
     function callback (response) { ... }  
   
  Where the response object is a Node Stream object. You can treat Node  
  Streams as objects that emit events. The three events that are of most  
  interest are: 'data', 'error' and 'end'. You listen to an event like so:  
   
     response.on('data', function (data) { ... })  
   
  The 'data' event is emitted when a chunk of data is available and can be  
  processed. The size of the chunk depends upon the underlying data source.  
   
  The response object / Stream that you get from http.get() also has a  
  setEncoding() method. If you call this method with 'utf8', the 'data'  
  events will emit Strings rather than the standard Node Buffer objects  
  which you have to explicitly convert to Strings.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: learnyounode print                  
   » To execute your program in a test environment, run: learnyounode run                                                                            
     program.js                                                                  
   » To verify your program, run: learnyounode verify program.js                 
   » For help run: learnyounode help        */

const http = require('http');
const url = process.argv[2];

http
  .get(url, res => {
    res.setEncoding('utf8');
    let rawData = '';
    res
      .on('data', chunk => {
        rawData += chunk;
        console.log(chunk);
      })
      .on('end', () => {
        /* do stuff */
      });
  })
  .on('error', e => {
    console.error(`Got error: ${e.message}`);
  });

// FULL VERSION
// FULL VERSION
// FULL VERSION
// FULL VERSION
/* http
  .get(url, res => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(
        'Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', chunk => {
      rawData += chunk;
    });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  .on('error', e => {
    console.error(`Got error: ${e.message}`);
  }); */
