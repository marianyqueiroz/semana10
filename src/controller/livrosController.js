const livros = require("../model/livros.json");
const fs = require('fs');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
};

const postLivros = (req, res) => {
    console.log(req.body);
    const { id, título, autor, ano, categoria } = req.body;
    livros.push({ id, título, autor, ano, categoria });

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), "utf8", function(err) {
        if(err){
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(201).send(livros);
};

const deleteLivro = (req, res) => {
    const id = req.params.id;
    const livroFiltrado = livros.find((livros) => livros.id == id);
    const index = livros.indexOf(livroFiltrado);
    livros.splice(index, 1);
    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), "utf8", function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(200).send(livros);
};

const getAllCategotia = (req, res) => {
    const categoria = req.params.categoria;
    const categoriaFiltrada = livros.filter((livros) => livros.categoria == categoria);
    console.log(categoriaFiltrada);
    res.status(200).send(categoriaFiltrada);
};



module.exports = {
    getAll,
    postLivros,
    deleteLivro,
    getAllCategotia
};
