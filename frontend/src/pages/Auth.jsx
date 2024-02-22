import {useState} from 'react'
import './css/Auth.css'

const Auth = () => {
  const [isSignUp,setIsSignUp]=useState(false)
  return (
    <>
   <div className="auths1">
   <div className="auths">
   <div className="authtitle">{isSignUp ? 'SignUp' :'Login'}</div>
    <form>
    {isSignUp &&<input type="text" placeholder="Your name" />}
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Your Email" />
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