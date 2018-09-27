import express from 'express';
import bodyParser from 'body-parser'
require('dotenv').config();
// @@ db
import _knex from 'knex';
import _knexConfig from '../knexfile';
// @@ initialize knex
import { Model } from 'objection';
// @@ routes
import GameRoute from './routes/GameRoute'
import UserRoute from './routes/UserRoute';

const dbObject  = _knex(_knexConfig.development);
Model.knex(dbObject);
const serverEnv = {
    HOST : '192.168.68.101' || process.env.HOST ,
    PORT :3030 || process.env.PORT,

}

var app =express();
app.use((req,res,next)=>{
    res.header( 'Access-Control-Allow-Origin','*');
    res.header( 'Access-Controll-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    res.header( 'Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Origin,Accept, X-Access-Token, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        next();
    });

// List of Routes 
GameRoute(app);
UserRoute(app);

// server on port 
app.listen(serverEnv.PORT, ()=>{
    console.log (`Server Started on: ${serverEnv.HOST}- port :${serverEnv.PORT}`);
});

