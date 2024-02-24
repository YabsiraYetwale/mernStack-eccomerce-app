import { CREATE, DELETE, END_LOADNG, FETCH_ALL, START_LOADNG, UPDATE } from "../components/actionTypes";
export const auth=(state={auths:[]},action)=>{
    switch (action.type) {
        case CREATE:
           return {...state,auths:[...state.auths,action.payload]}
        case FETCH_ALL:
           return {...state,auths:action.payload}
        case FETCH:
           return {...state,property:action.payload}
        default:
            return state;
    }
}