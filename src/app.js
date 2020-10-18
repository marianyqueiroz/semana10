const express = require("express");
const app = express();

const index = require("./routes/index");
const livros = require("./routes/livrosRoute");

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