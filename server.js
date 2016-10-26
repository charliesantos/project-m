var express = require("express"),
    app = express(),
    port = parseInt(process.env.PORT, 10) || 3030;

app.use('/', express.static(__dirname + '/dist'));

console.log("Server listening at " + port);
app.listen(port);