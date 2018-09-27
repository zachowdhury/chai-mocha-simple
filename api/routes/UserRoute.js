import { newUser } from '../modules/UserModule';


export default function (app){

    app.post('/new-user',(req, res, next) => {

        user_data =  req.body.new_user_data;
 // TODO:
 console.log( 'User data here ',user_data);
        newUser(user_data)
        .then ( (user)=>{
            return res.json(user);
        })
        .catch( (error) => {
                return res.status ( 400 ).json({error: 'not allowed'});
        });
    }).next();
         

}