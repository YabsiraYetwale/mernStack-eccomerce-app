import { CREATE, DELETE, END_LOADNG, FETCH_ALL, START_LOADNG, UPDATE } from "../components/actionTypes";
export const products=(state={isLoading:true,products:[]},action)=>{
    switch (action.type) {
        case START_LOADNG:
           return {...state,isLoading:true}
        case END_LOADNG:
           return {...state,isLoading:false}
        case CREATE:
           return {...state,products:[...state.products,action.payload]}
        case FETCH_ALL:
           return {...state,products:action.payload}
        case FETCH:
           return {...state,product:action.payload}
        case UPDATE:
           return {...state,products:state.products.map((product)=>product._id === action.payload._id ? action.payload : state)}
        case DELETE:
           return {...state,products:state.products.filter((product)=>product._id !== action.payload)}
        default:
            return state;
    }
}