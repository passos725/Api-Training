module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.send("Digite o usuario e a senha!");
  });
};
