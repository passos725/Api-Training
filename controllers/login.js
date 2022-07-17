module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.send("Digite o usuario e a senha!");
  });

  app.post("/login", (req, res) => {
    res.send("Logado com sucesso");
  });
};
