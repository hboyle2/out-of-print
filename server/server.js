require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      cors =  require('cors')
      ctrl = require('./controller/controller')
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch(err => console.log(err))

app.get('/api/womens/tshirts', ctrl.getWomensTees)
app.get('/api/womens/sweatshirts', ctrl.getWomensSweatshirts)
app.get(`/api/item/:slug`, ctrl.getItem)
app.post(`/api/order`, ctrl.getOrder)
app.post('/api/cart', ctrl.addToCart)





const PORT = 4646;

app.listen(PORT, ()=> console.log('Listening on port:' , PORT))