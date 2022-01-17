const dotenv = require('dotenv');
dotenv.config();
const cookieSession = require('cookie-session');
const passport = require('passport');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./utilities/passport');
const authRoute = require('./routes/auth');
const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['lama'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);
console.log('hellosasds');

app.use('/auth', authRoute);

app.listen(process.env.PORT, () => {
  console.log('Server started at 5000');
});
