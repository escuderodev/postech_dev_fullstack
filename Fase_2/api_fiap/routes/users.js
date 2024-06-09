var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'Eduardo'},
  {id: 2, name: 'Carol'}
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if(!user) {
    return res.status(404).send('Usuário não encontrado!');
  } else {
    res.json(user);
  }
});

router.post('/', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
    };
    users.push(user);
    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      id: user.id,
      name: user.name
    });
});

router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if(!user) {
    return res.status(404).send('Usuário não encontrado!');
  } else {
    user.name = req.body.name;
    res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      id: user.id,
      name: user.name
    });
  }
});

router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if(index === -1) {
    return res.status(404).send('Usuário não eencontrado!');
  } else {
    users.splice(index, 1);
    res.status(200).send('Usuário deletado com sucesso!');
  }
});

module.exports = router;
