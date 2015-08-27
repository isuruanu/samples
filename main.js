var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

console.log("static server started on port 5000")
app.use(serveStatic("./src"));
app.listen(5000);
