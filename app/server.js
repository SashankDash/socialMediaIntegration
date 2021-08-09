import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { session, PORT } from './config/index.js';
import { googleAuth, facebookAuth } from './services/loginServices.js';
import routes from './routes/authRoute.js';
import DataBase from './db/dbConnection.js';
import swaggerUI from 'swagger-ui-express';
import swaggerAPIDesc from './services/swaggerService.js';

const app = express();

//swagger middleware
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerAPIDesc));

//database connection
DataBase.connect();

//passport middleware & initialization
passport.use(googleAuth);
passport.use(facebookAuth);
passport.serializeUser((user, callback) => {
  callback(null, user);
});
passport.deserializeUser((user, callback) => {
  callback(null, user);
});
app.use(expressSession(session));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', routes);

const port = PORT || 8080;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
