require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      cors =  require('cors')
      ctrl = require('./controller/controller')
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0');
const app = express();

app.use(bodyParser.json());
app.use(cors());



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('build'))

//AUTH0

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(acessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
db.get_user([profile.identities[0].user_id]).then( user => {
   if(user[0]){
            done(null, user[0].id)
        } else {
            db.create_user([ profile.emails[0].value, profile.identities[0].user_id]).then( user => {
                done(null, user[0].id)
            })
        }
    })
}))

passport.serializeUser(function(userId, done){
  done(null, userId);
})

passport.deserializeUser(function(userId, done){
   app.get('db').current_user([userId]).then( user => {
        done(null, user[0]);
    })
  
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_HOST + '/#/account',
    failureRedirect: '/auth'
}))

app.get('/auth/logout', (req,res)=>{
    console.log(req.user)
    req.logOut();
    console.log(req.user)
    res.redirect(302, process.env.AUTH_LOGOUT)
})

app.get('/auth/user', (req,res,next) => {
  if(!req.user){
        return res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user);
    }
   
})

//DATABASE

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch(err => console.log(err))

app.get('/api/womens/tshirts', ctrl.getWomensTees)
app.get('/api/womens/sweatshirts', ctrl.getWomensSweatshirts)
app.get('/api/mens/tshirts', ctrl.getMensTees)
app.get(`/api/item/:slug`, ctrl.getItem)
app.post('/api/cart', ctrl.addToCart)
app.delete('/api/cart/:id/', ctrl.deleteItems)
app.get('/api/test', (req,res)=>{
    console.log(req.user)
    res.end()
})





const PORT = 4646;

app.listen(PORT, ()=> console.log('Listening on port:' , PORT))
