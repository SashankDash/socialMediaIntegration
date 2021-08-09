import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET,
  } from '../config/index.js';

export const googleAuth = new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/google',
    },
    (accessToken, refreshToken, profile, callback) => {
      callback(null, profile);
    }
  )
  

  export const facebookAuth = new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/facebook',
      profileFields: ['emails', 'displayName', 'name', 'picture'],
    },
    (accessToken, refreshToken, profile, callback) => {
      callback(null, profile);
    }
  )
