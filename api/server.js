import express from 'express';
// @@ Routes
import GameRoute from './routes/GameRoute'


const env = {
    HOST : '192.168.68.101',
    PORT :3030,

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

// server on port 
app.listen(env.PORT, ()=>{
    console.log (`Server Started on port :${env.PORT}`);
});

