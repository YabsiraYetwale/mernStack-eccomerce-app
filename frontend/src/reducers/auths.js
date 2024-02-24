import { LOGOUT, SIGNIN, SIGNUP } from "../components/actionTypes";
export const auths=(state={auths:[]},action)=>{
    switch (action.type) {
        case SIGNUP:
           localStorage.setItem("user-auth",JSON.stringify({...action.payload}))
           return {...state,auths:[...state.auths,action.payload]}
        case SIGNIN:
           return {...state,auths:action.payload}
        case LOGOUT:
         localStorage.clear()
           return {...state,auths:null}
        default:
            return state;
    }
}