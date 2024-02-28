import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
const NewsLetter = () => {
  return (
    <>
       <Box sx={{ display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    paddingBottom:'30px',}}>
       <Box sx={{background:'linear-gradient(#f1eff1,#f7f3f3,#fff4f4 )',
    padding:'0px 80px 5px 80px',
    display:'flex',
    justifyContent:'space-around',
    gap:'100px',}}>
        <Box sx={{display:'flex',
     flexDirection:'column',
     padding:'30px 180px',
     gap:'10px',}}>
         <Box sx={{  color:'#c037c0 ',
     display:'flex',
     flexDirection:'column',
     padding:'30px 0',}}>
             <Typography sx={{fontSize:'40px',
     fontWeight:'bolder',"@media(max-width:620px)":{
      fontSize:'20px',
      width:'70%',
      ml:'30px'
     }}}>Get Exclusive Offers On Your Email</Typography>
         </Box>
         <Typography sx={{color:'#565656',"@media(max-width:400px)":{
      width:'70%',
      ml:'30px',
     }}}>Subscribe to our newsletter and stay updated.</Typography>
         <Box sx={{ display:'flex',
     justifyContent:'center',
     alignItems:'center',"@media(max-width:400px)":{
      flexWrap:'wrap',
     }}}>
           <TextField type="email" placeholder="Your Email" variant='outlined' sx={{width:'300px',
     padding:'15px 40px',
     border:'none',
     paddingLeft:'30px',}}/>
           <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     padding:'18px 40px',
     borderRadius:'2px',
     color:'#fff',
     cursor:'pointer',
     position:'relative',
     right:'40px',}}><span>Subscribe</span></Box>
          </Box>
        </Box>
        </Box>
       </Box>
    </>
  )
}

export default NewsLetter