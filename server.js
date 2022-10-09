//Load Modules
const express = require('express')
const pokemon = require('./models/pokemon')

//App Init
const app = express()
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
  res.send(pokemon)
})




app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})