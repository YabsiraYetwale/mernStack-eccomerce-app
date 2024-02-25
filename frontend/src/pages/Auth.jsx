import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signUpUser,signInUser} from '../actions/user'
import './css/Auth.css'

const Auth = () => {
  const [isSignUp,setIsSignUp]=useState(false)
  const [userData,setUserData]=useState({name:'',email:'',password:''})
  const dispatch=useDispatch()
  const history=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(isSignUp){
      dispatch(signUpUser(userData,history))
    }
    else{
      dispatch(signInUser(userData,history))
    }
  }
  return (
    <>
   <div className="auths1">
   <div className="auths">
   <div className="authtitle">{isSignUp ? 'SignUp' :'Login'}</div>
    <form onSubmit={handleSubmit}>
    {isSignUp &&<input value={userData.name} onChange={(e)=>setUserData({...userData,name:e.target.value})} type="text" placeholder="Your name" />}
    <input value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Email address" />
    <input value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Your password" />
    <button className="registor">{isSignUp ?'Register':'Login'}</button>
    {isSignUp?
      <div  onClick={()=>setIsSignUp(preve=>!preve)}  className="have">Already have an account?<div className="login">Login here</div></div>
      :
      <div onClick={()=>setIsSignUp(preve=>!preve)}  className="have">Don't have an account? <div className="login">Register here</div></div>

      }
    </form>
   </div>
   </div>
    </>
  )
}

export default Auth