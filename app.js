var path = require('path');
var cons = require("consolidate");
var express = require("express");


var app = express();

app.set("port", process.env.PORT || 3000);

app.engine('html', cons.swig)
app.set("views", path.resolve(__dirname, "public"))
app.set("view engine", "html")

var publicpath = __dirname + '/public'

app.use(express.static(publicpath) )

app.get('/', (req, res, next) => {

    res.sendFile(publicpath + '/vivan.html')
})


app.listen(app.get("port"), function() {
    console.log("Ghost server running on port " + app.get("port"));
});