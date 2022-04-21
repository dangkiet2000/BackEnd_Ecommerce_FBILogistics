const express = require('express')
const router = express.Router()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy
const config = require('../config/configGoogle')

router.use(passport.initialize())
passport.session()

router.get('/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  }))

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/result/google'
  }))

passport.use(new GoogleStrategy({
    clientID: config.client_id,
    clientSecret: config.client_secret,
    callbackURL: config.callbackURL
  },
  (request, accessToken, refreshToken, profile, done) => {
    router.get('/result/google', (req, res) => {
      res.json(profile._json)
    })
    return done(null, profile);
  }))
  
passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
})

module.exports = router