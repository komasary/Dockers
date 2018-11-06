//ideas used from w3schools

var http = require("http"); //get http to use its functions
var fs = require("fs"); //get filestream to use its function
var path = require("path");
http
  .createServer(function(req, res) {
    //create a local server
    if (req.url == "/") {
      fs.readFile("./public/sum.html", "UTF-8", function(err, html) {
        //reads the html file
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html); //end the respond process
      });
    } else if (req.url.match(".css$")) {
      var cssPath = path.join(__dirname, "public", req.url); //joins all into one path
      var fileStream = fs.createReadStream(cssPath, "UTF-8"); //reads the css file
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res); //to connect multiple stream together
    } else if (req.url.match(".jpg$")) {
      var imagePath = path.join(__dirname, "public", req.url);
      var fileStream = fs.createReadStream(imagePath); //reads the image file
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fileStream.pipe(res); //to connect multiple stream together
    }
  })
  .listen(8080); //used 8080 port for my server
