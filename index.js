// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics
//console.log("hello world");


let myhttp = require('http');

let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    myresponse.writeHead(
      200, 
      {
        'Content-Type': 'text/plain'
      }
    );
    myresponse.end(
      "Greetings from the server!"
    );
  }
);

myserver.listen(8080, "0.0.0.0");