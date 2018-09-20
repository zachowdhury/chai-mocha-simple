
const LOAD_USER =       'chai/analysis/LOAD_USER'
const LOAD_USER_FAIL=   '/chai/analysis/LOAD_USER_FAIL'
const ADD_USER =  '/chai/analysis/ADD_USER'

const initialState ={
    count :1,
    users:  []
   }; 
   
   export default function users(state= initialState, action={}){
       
    switch ( action.type){

        case 'LOAD_USER':
        return state.users;

        case 'ADD_USER':        
        return [...state, action.payload];
           
        case 'LOAD_USER_FAIL':
        return state.error ;
   
        default :
        return state;
      
    }
   
   }

   export function updateUser (){
   
    return{
        type:[ LOAD_USER, ADD_USER ],
        payload : 'what '
    };
   }