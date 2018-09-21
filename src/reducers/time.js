const FETCH_NEW_TIME  = 'analytics/FETCH_NEW_TIME';

const initialState ={
    currentTime: new Date().toString(),
}

export default function time (state=initialState , action){

    switch (action.type){

        case 'FETCH_NEW_TIME':
        return {...state, currentTime: action.payload};

        default:
        return state; 
    }

}
/**
 * 
 */
export const fetchNewTime =()=>({
    type : NEW_TIME,
    payload: new Date().toString(),
});