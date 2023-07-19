//!DOUBLE CHECK App Route NAMES & FOLDER/FILE NAMES IN Const

const authorController = require("../controllers/author.controller");

//
// below is added first to test along with routes.js
const root = require("./routes");

module.exports = (app) => {
  //default test server check
  app.get("/", root);


  //create - post
  app.post("/api/authors", authorController.postCreateAuthor);

  //get all - get
  app.get("/api/authors", authorController.getAllAuthors);

  //get one - get w/ id
  app.get("/api/authors/:id", authorController.getOneAuthor);

  //update - put w/ id
  app.put("/api/authors/:id", authorController.putUpdateAuthor);

  //delete - delete w/ id
  app.delete("/api/authors/:id", authorController.deleteAuthor);
};
