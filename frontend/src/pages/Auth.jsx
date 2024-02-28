import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signUpUser,signInUser} from '../actions/user'
import { Box,Button,TextField,Typography } from '@mui/material'


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
   <Box sx={{ display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    padding:'90px 30px 90px 30px',
    margin:'0 0 180px 0',
    background:'linear-gradient(#f5f1f5,#fcfcfc,#b1abab )',}}>
   <Box sx={{display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    padding:'30px',
    gap:'20px',
    background:'#fff',}}>
   <Box sx={{fontWeight:'bolder',
    fontSize:'30px',}}>{isSignUp ? 'SignUp' :'Login'}</Box>
    <form  style={{display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:'400px',
    gap:'20px',}}>
    {isSignUp &&<TextField sx={{ width:'100%',"@media(max-width:400px)":{
      width:'63%',
    }
   }} value={userData.name} onChange={(e)=>setUserData({...userData,name:e.target.value})} type="text" placeholder="Your name" />}
    <TextField sx={{ width:'100%',"@media(max-width:400px)":{
      width:'63%',
    }
   }} value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} type="email" placeholder="Email address" />
    <TextField sx={{ width:'100%',"@media(max-width:400px)":{
      width:'63%',
    }
   }} value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Your password" />
    <Button variant="contained" onClick={handleSubmit}   sx={{width:'100%',"@media(max-width:400px)":{
      width:'63%',
    },
   height:'40px',
   background:'red',
   "& hover":{
    background:'red',
   },
   border:'none',
   fontWeight:'bolder',
   cursor:' pointer',}}>{isSignUp ?'Register':'Login'}</Button>
    {isSignUp?
      <Box  onClick={()=>setIsSignUp(preve=>!preve)}  sx={{ display:'flex',
      color:'#383636',}}>Already have an account?<Box sx={{color:'rgb(190, 18, 18)',
      fontWeight:'bolder',
      cursor:'pointer',}}>Login here</Box></Box>
      :
      <Box onClick={()=>setIsSignUp(preve=>!preve)}  sx={{ display:'flex',
      color:'#383636',}}>Don't have an account? 
      <Box sx={{color:'rgb(190, 18, 18)',
    fontWeight:'bolder',
    cursor:'pointer',}}>Register here</Box></Box>

      }
    </form>
    </Box>
   </Box>
    </>
  )
}

export default Auth