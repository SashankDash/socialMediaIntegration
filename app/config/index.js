import dotenv from 'dotenv';
dotenv.config();
export const {
  DB_URL,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,PORT
} = process.env;

//google client id is not in env variable as client id has "-" in it which is not supported by bash
//use your client id
export const GOOGLE_CLIENT_ID= '854785160029-os1k6kg6kqu7fedbmul2esrni3lmbvnv.apps.googleusercontent.com'

export const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};
export const session = {
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  
}
