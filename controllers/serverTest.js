module.exports = (app) => {
  app.get("/serverTest", (req, res) => {
    res.send("servidor rodando!");
  });
  app.post("/serverTest", (req, res) => {
    res.send("Servidor funcionando corretamente!");
  });
};
