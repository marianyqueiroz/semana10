const colaboradores = require("../model/colaboradores.json");
const fs = require('fs');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(colaboradores);
};

const postcolaboradores = (req, res) => {
    console.log(req.body);
    const { id, título, autor, ano, categoria } = req.body;
    colaboradores.push({ id, título, autor, ano, categoria });

    fs.writeFile("./src/model/colaboradores.json", JSON.stringify(colaboradores), "utf8", function(err) {
        if(err){
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(201).send(colaboradores);
};

const deleteColaboradores = (req, res) => {
    const id = req.params.id;
    const colaboradorFiltrado = colaboradores.find((colaboradores) => colaboradores.id == id);
    const index = colaboradores.indexOf(colaboradorFiltrado);
    livros.splice(index, 1);
    fs.writeFile("./src/model/colaboradores.json", JSON.stringify(colaboradores), "utf8", function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(200).send(colaboradores);
};

const GetById = (req, res) => {
    const id = req.params.id;
    const idade = req. params.idade;

    const idadeFiltrada = colaboradores.find((colaboradores) => colaboradores.id == idade);
    console.log(idadeFiltrada)

    res.status(200).send(idadeFiltrada);
};

const putLivros = (req, res) => {
    const id = req.params.id;
    const colaboradorASerModificado = colaboradores.find((colaboradores) => colaboradores.id == id);
    console.log(colaboradorASerModificado)
    const colaboradorAtualizado = req.body;
    console.log(colaboradorAtualizado);
    const index = colaboradores.indexOf(colaboradorASerModificado);
    console.log(index);
    livros.splice(index, 1, colaboradorAtualizado);
    console.log(colaboradores);

    fs.writeFile("./src/model/colaboradores.json", JSON.stringify(colaboradores), "utf8", function(err) {
        if (err) {
            return res.status(424).send({message : err});
        };
        console.log("Arquivo atualizado com sucesso!");
    });

    res.status(200).send(colaboradores);
};

const patchColaboradores = (req, res) => {
    const id = req.params.id;
    const atualizacao = req.body;

    try {
        const colaboradorASerModificado = colaboradores.find((colaboradores) => colaboradores.id == id);
        console.log(Object.keys(atualizacao).forEach((chave) => {
            colaboradorASerModificado[chave] = atualizacao[chave];
        }));

        console.log(colaboradores);
        return res.status(200).send(colaboradores);
    } catch(err) {
        return res.status(424).send({message : err})
    }
}

module.exports = {
    getAll,
    postcolaboradores,
    deleteColaboradores,
    GetById,
    putLivros,
    patchColaboradores
};
