
const LOAD_USER =       'chai/analysis/LOAD_USER'
const LOAD_USER_FAIL=   '/chai/analysis/LOAD_USER_FAIL'
const UPDATE_USER =  '/chai/analysis/UPDATE_USER'

const initialState ={
    count :1,
    users:  []
   }; 
   
   export default function users(state= initialState, action={}){
       
    switch ( action.type){

        case 'LOAD_USER':
        return state.users;

        case 'UPDATE_USER':        
       
        return Object.assign({},...state,payload);
           
        case 'LOAD_USER_FAIL':
        return state.error ;
   
        default :
        return state.users;
      
    }
   
   }

   export function updateData (data){
   
    return{
        type:[UPDATE_USER],
        payload : data
    };
   }