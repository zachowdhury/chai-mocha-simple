
import  fizbuzzLogic,{ multiply }  from '../modules/Game';


export default function (app){

    app.post( '/game', (req, res, next ) => {
        const numbers = [122,45,1,2,5,8,7,114,45,30];
            //const numbers = req.body.numbers;
            console.log ('>>>',req.body);
            return res.json (fizbuzzLogic(numbers));
        });
        
        // rest
        app.get ('/multiply/:val1/:val2', function (req, res, next ){
            
            const x  = req.params.val1;
            const y  = req.params.val2;
             
            multiply(x,y).then((result)=>{ 
                 if ( result ) {
                      return res.json(result);
                 }else{    
                     return res.status(404).end();
                 }
             });
//            return res.json(multiply(x,y));
        });
        
        // get server status 
        app.get ('/server-status',function(req, res){
            res.send('Server is runnig ... Fizz Buzzz Game');
        
        });
        
        



}