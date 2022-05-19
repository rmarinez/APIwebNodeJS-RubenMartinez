
const express = require('express')


function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpasswordRuben-') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

const app = express()
const port = 3000
const { User } = require("./models"); 
const { basketPlayers } = require("./models"); 
let date = new Date();


var comentario = function (req, res, next) {
  console.log("S'han demanat els jugadors el " + date.toLocaleDateString() + " a les " + date.getHours()+":"+date.getMinutes());
  next();
};
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', isAuthorized, async (req,res) => {
  const users = await User.findAll();
  res.json(users);
  })


app.use(comentario);
app.get('/basketplayers', isAuthorized, async (req,res) => {
  const basketplayers = await basketPlayers.findAll();
  res.json(basketplayers);
  })

app.get('/products', (req, res) => {
  res.json([{
    id: 1,
    name: 'The Bluest Eye'
  }])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))