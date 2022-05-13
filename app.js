const express = require('express')

function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpasswordRuben') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', isAuthorized, (req,res) => {
  res.json([{
    id: 1,
    name: 'User Userson'
  }])
 })

app.get('/products', (req, res) => {
  res.json([{
    id: 1,
    name: 'The Bluest Eye'
  }])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))