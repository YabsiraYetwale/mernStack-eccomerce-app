import React from 'react'
import hero from '../../assets/w55.png'
import { Box,Typography } from '@mui/material'
import './Hero.css'
const Hero = () => {
  return (
   <>
   <Box sx={{background:'linear-gradient(180deg,#f1edf1,#e4e0e0,#c7c4c4 60%)'}}>
    <Box sx={{ padding:'80px',
              display:'flex',
              justifyContent:'space-around',
               gap:'20px',
               "@media (max-width:620px)":{
                flexDirection:'column-reverse',
              },
               }}>
       <Box sx={{display:'flex',flexDirection:'column',
    padding:'30px 0',
    gap:'10px',}}>
       <Typography sx={{fontSize:'20px',fontWeight:'bolder'}}>NEW ARRIVALS ONLY</Typography>
        <Box sx={{display:'flex',
                  flexDirection:'column',
                  padding:'30px 0',}}>
            <Typography sx={{ fontSize:'60px',fontWeight:'bolder', "@media (max-width:600px)":{
                fontSize:"30px"},}}>new</Typography>
            <Typography sx={{ fontSize:'60px',fontWeight:'bolder', "@media (max-width:600px)":{
                fontSize:"30px"},}}>collections</Typography>
            <Typography sx={{ fontSize:'60px',fontWeight:'bolder', "@media (max-width:600px)":{
                fontSize:"30px"},}}>for everyone</Typography>
        </Box>
        <Box sx={{ background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',
    "@media (max-width:600px)":{
          width:'140px',
    }
    }}><Typography>Latest Collection</Typography></Box>
       </Box>
       <Box sx={{display:'flex',
  justifyContent:'center',
  alignItems:'center',}}>
        <img src={hero} alt='hero' className='leftimg'/>
       </Box>
    </Box>
   </Box>
   </>
  )
}

export default Hero