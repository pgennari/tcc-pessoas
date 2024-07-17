const express = require('express');
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params['id'];
  res.send(`Esta é a rota do Usuário ${id}`);
});

router.post('/', (req, res) => {
  if ()
});
module.exports = router;