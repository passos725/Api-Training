const Atendimento = require("../models/atendimentos");
module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    res.send("Faça o atendimento");
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });
};
