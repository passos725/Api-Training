module.exports = (app) => {
  app.get("/serverTest", (req, res) => {
    res.send("servidor rodando!");
  });
};
