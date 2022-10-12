//Load Modules
const express = require('express')
const pokemon = require('./models/pokemon')

//App Init
const app = express()
app.use(express.static(__dirname + '../views'));
const PORT = 3000


//App settings
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())


app.use(express.urlencoded({ extended: false}))


//======ROUTES===========
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

app.get('/pokemon', (req, res) => {
  res.render('index', {pokemon: pokemon}) //{name/value}
})

app.get('/pokemon/:id', (req, res) => {
  res.render('Show', {pokemon: pokemon, id: req.params.id})
})

app.post('/pokemon', (req, res) => {
  console.log("body",req.body);
  pokemon.push({name: req.body.name, img: 'https://image.shutterstock.com/image-vector/28-july-2016-vector-thumbs-600w-459846505.jpg'})
  res.redirect('/pokemon')
})


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})