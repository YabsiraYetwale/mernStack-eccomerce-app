import * as api from '../api'
import { SIGNIN, SIGNUP } from '../components/actionTypes'

export const signUpUser=(user)=>async(dispatch)=>{
   try {
    const {data}=await api.signUpUser(user)
    dispatch({type:SIGNUP,payload:data})
   } catch (error) {
    console.log(error)
   }
}
export const signInUser=(user)=>async(dispatch)=>{
   try {
    const {data}=await api.signInUser(user)
    dispatch({type:SIGNIN,payload:data})
   } catch (error) {
    console.log(error)
   }
}


