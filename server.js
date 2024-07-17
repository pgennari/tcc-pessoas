require('dotenv').config();
const express = require("express");
const app = express();

const errorHandler = require("./middlewares/error-handler");
const usuarioRoutes = require("./routes/usuarios");

app.use('/usuarios', usuarioRoutes);

app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server está rodando na porta ${port}`);
});