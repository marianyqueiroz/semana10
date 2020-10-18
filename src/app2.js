const express = require("express");
const app2 = express();

const index = require("./routes/index");
const bodyParser = require("body-parser")
const colaboradores = require("./routes/colaboradoresRoute");

app2.use(bodyParser.json());

app2.use(function (req, res, next) {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    );

    next();

});

app2.use("/", index);
app2.use("/colaboradores", colaboradores);

module.exports = app2;