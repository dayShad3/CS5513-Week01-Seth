// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics
//console.log("hello world");


let myhttp = require('http');

let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let myresponsetext;
      switch (myrequest.url){
        case "/42":
          myresponsetext = "The answer to life, the universe, and everything.";
          break;
        case "/ahh":
          myresponsetext = "Don't Panic!";
          break;
        case "/go":
          myresponsetext = "Don't forget to bring a towel!";
          break;
        default:
          myresponsetext = "Sorry for the inconvenience.";
          break;
      }
    myresponse.writeHead(
      200, 
      {
        'Content-Type': 'text/plain'
      }
    );
    myresponse.end(
      myresponsetext
    );
  }
);

myserver.listen(8080, "0.0.0.0");