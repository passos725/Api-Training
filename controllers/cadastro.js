module.exports = (app) => {
  app.get("/cadastro", (req, res) => {
    res.send("Cadastro de usuario");
  });
};
