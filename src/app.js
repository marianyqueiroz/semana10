const express = require("express");
const app = express();

const index = require("./routes/index");
const bodyParser = require("body-parser")
const livros = require("./routes/livrosRoute");

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    );

    next();

});

app.use("/", index);
app.use("/livros", livros);

module.exports = app;