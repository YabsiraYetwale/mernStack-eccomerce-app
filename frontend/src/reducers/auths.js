import { LOGOUT, AUTH } from "../components/actionTypes";
export const auths=(state={auths:[]},action)=>{
    switch (action.type) {
        case AUTH:
           localStorage.setItem("user-auth",JSON.stringify({...action.payload}))
           return {...state,auths:[...state.auths,action.payload]}
        case LOGOUT:
         localStorage.clear()
           return {...state,auths:[...state.auths,null]}
        default:
            return state;
    }
}