module.exports = (app) => {
  app.get("/atendimento", (req, res) => {
    res.send("Faça o atendimento");
  });

  app.post("/atendimento", (req, res) =>
    res.send(`Você esta da area de atendimento e esta na parte do POST`)
  );
};
