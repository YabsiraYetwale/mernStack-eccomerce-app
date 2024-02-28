import {Link} from 'react-router-dom'
import {FacebookOutlined,Instagram,CallOutlined} from '@mui/icons-material'
import logo from '../../assets/logo.jpg'
import { Box, CardMedia, Typography } from '@mui/material'
const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0,0)
  }
  return (
    <>
    <Box sx={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    paddingBottom:'30px',}}>
    <Box sx={{paddingBottom:'30px'}}>
        <Box sx={{ paddingTop:'40px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:'40px',}}>
        <Box sx={{display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px',}}>
        <CardMedia image={logo} alt="logo" sx={{ width:'60px',
       height:'40px',}} />
        <Typography sx={{fontSize:'30px',
       fontWeight:'bolder'}}>SHOPPER</Typography>
      </Box>
      <Box sx={{  display:'Flex',
       justifyContent:'center',
       alignItems:'center',
       gap:'40px',
       "@media(max-width:620px)":{
        gap:"20px",
        flexWrap:'wrap',
       },
       }}>
        <Link style={{textDecoration:'none',
textDecoration:'none',}} onClick={handleClick} to='/'><Box sx={{textDecoration:'none',
       color:'#444',
       fontWeight:'bold',}}>Shop</Box></Link>
        <Link style={{textDecoration:'none',
textDecoration:'none',}} to='/catagory/men'><Box sx={{
       color:'#444',
       fontWeight:'bold',}}>Men</Box></Link>
        <Link style={{textDecoration:'none',
textDecoration:'none',}} to='/catagory/women' ><Box sx={{
       color:'#444',
       fontWeight:'bold',}}>Women</Box></Link>
        <Link style={{textDecoration:'none',
textDecoration:'none',}} to='/catagory/kids'><Box sx={{
       color:'#444',
       fontWeight:'bold',}}>Kids</Box></Link>
        <Link style={{textDecoration:'none',
textDecoration:'none',}} to='/listProduct'><Box sx={{
       color:'#444',
       fontWeight:'bold',}}>Products</Box></Link>
      </Box>
      <Box sx={{ display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:'20px',}}>
    <FacebookOutlined/>
    <CallOutlined/>
    <Instagram/>
    </Box>
     </Box>
    </Box>
    </Box>
    
    </>
  )
}

export default Footer