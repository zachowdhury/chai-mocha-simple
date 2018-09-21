
const LOAD_MOVIE =       'chai/analysis/LOAD_MOVIE'
const ADD_DATA =        '/chai/analysis/ADD_DATA'
const LOAD_FAIL=   '/chai/analysis/LOAD_FAIL'
const COUNT_DOWN = '/analysis/COUNT_DOWN';

const initialState ={
    count :1,
    users:  []
   }; 
   
   export default function movie (state= initialState, action={}){
       
    switch ( action.type){


     
        case 'COUNT_UP':
        return state+1;
        
        case 'COUNT_DOWN':
        return state-1;

        case 'ADD_DATA':        
        return [...state, action.payload];
           
        case 'LOAD_FAIL':
        return state.error ;
   
        default :
        return state;
      
    }
   
   }

   export const  addData = ( data )=>({
   
        type:[ ADD_DATA ],
        payload : data
    });
   export const  upVote=()=>({
           type:[ COUNT_UP ],
           payload:count

       });

   