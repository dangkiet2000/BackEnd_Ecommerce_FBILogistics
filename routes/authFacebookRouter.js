const express = require('express')
const router = express.Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const config = require('../config/configFacebook')

router.use(passport.initialize())
passport.session()

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((obj, done) => {
  done(null, obj);
})

passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret: config.facebook_api_secret,
    callbackURL: config.callback_url
  },
  (accessToken, refreshToken, profile, done) => {
    router.get('/result/facebook',(req, res) => {
      res.send(profile._json)
    })
    return done(null, profile)
  }
))

router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: 'email'
  }))

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/result/facebook',
    failureRedirect: '/login'
  }))
  
module.exports = router