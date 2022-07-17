module.exports = (app) => {
  app.get("/cadastro", (req, res) => {
    res.send("Cadastro de usuario");
  });

  app.post("/cadastro", (req, res) => {
    res.send("Usuario cadastrado com sucesso!");
  });
};
