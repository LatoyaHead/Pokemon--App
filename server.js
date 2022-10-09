//Load Modules
const express = require('express')
const pokemon = require('./models/pokemon')

//App Init
const app = express()
app.use(express.static(__dirname + '../views'));
const PORT = 3000

//Middleware

//App settings
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())


//======ROUTES===========
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
  res.render('index', {pokemon: pokemon}) //{name/value}
})

app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id)
})






app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})