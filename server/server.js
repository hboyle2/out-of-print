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

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(acessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    // console.log(profile.identities[0].user_id)
    db.get_user([profile.identities[0].user_id]).then( user => {
        // console.log('user', user)
        if(user[0]){
            done(null, user[0].id)
        } else {
            db.create_user([ profile.emails[0].value, profile.identities[0].user_id]).then( user => {
                done(null, user[0].id)
                // console.log("display", profile)
            })
        }
    })
}))
// app.use("*", (req,res,next)=>{
//     next()
// })
passport.serializeUser(function(userId, done){
    // console.log("serialize userId", userId)
    done(null, userId);
})

passport.deserializeUser(function(userId, done){
    // console.log('deserialize userId', userId)
    app.get('db').current_user([userId]).then( user => {
        done(null, user[0]);
    })
  
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.HOST + '/#/account',
    failureRedirect: '/auth'
}))

app.get('/auth/logout', (req,res)=>{
    console.log(req.user)
    req.logOut();
    console.log(req.user)
    res.redirect(302, 'https://haleyb.auth0.com/v2/logout?returnTo=http%3A%2F%2www.outofprintclone.info%3A4646%2F&client_id=023s1_krVmPpqHvdeTmCi4N90VteqyS3')
})

app.get('/auth/user', (req,res,next) => {
    // console.log('session', req.session);
    // console.log('req.user', req.user);
    if(!req.user){
        return res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user);
    }
   
})

// app.get('/auth/logout', (req,res, next) => {
//     req.session.destroy();
//     res.redirect(302, ''  )
// })

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
}).catch(err => console.log(err))

app.get('/api/womens/tshirts', ctrl.getWomensTees)
app.get('/api/womens/sweatshirts', ctrl.getWomensSweatshirts)
app.get('/api/mens/tshirts', ctrl.getMensTees)
app.get(`/api/item/:slug`, ctrl.getItem)
//app.post(`/api/order`, ctrl.getOrder)
app.post('/api/cart', ctrl.addToCart)
app.delete('/api/cart/:id/', ctrl.deleteItems)
app.get('/api/test', (req,res)=>{
    console.log(req.user)
    res.end()
})





const PORT = 4646;

app.listen(PORT, ()=> console.log('Listening on port:' , PORT))