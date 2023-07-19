//!DOUBLE CHECK Module.exports NAMES & FOLDER/FILE NAMES IN Const

const Author = require("../models/author.model");

module.exports = {

postCreateAuthor: (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {
        res.json(newAuthor);
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err)
    });
},
getAllAuthors: (req, res) => {
    Author.find()
    .then((writer) => {
        res.json(writer);
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err)
    });
},
getOneAuthor: (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((oneAuthor) => {
        res.json(oneAuthor);
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err)
    });
},
putUpdateAuthor: (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatingAuthor) => {
        res.json(updatingAuthor);
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err)
    });
},
deleteAuthor: (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deleteAuthor) => {
        res.json(deleteAuthor);
    })
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err)
    });
}


};