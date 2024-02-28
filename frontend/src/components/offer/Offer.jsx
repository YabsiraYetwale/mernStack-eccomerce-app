import { Box, CardMedia, Typography } from '@mui/material'
import w2 from '../../assets/m11.png'
const Offer = () => {
  return (
    <>
    <Box  sx={{  display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:'30px',}}>
    <Box sx={{background:'linear-gradient(180deg,#f1edf1,#e4e0e0,#c7c4c4 60%)'
}}>
     <Box sx={{ padding:'80px 80px 0px 80px',
   display:'flex',
   justifyContent:'space-around',
   gap:'100px',
   "@media (max-width:820px)":{
    gap:'10px'
  },
   "@media (max-width:620px)":{
   flexWrap:'wrap',
  },
   }}>
        <Box sx={{ display:'flex',
    flexDirection:'column',
    padding:'30px 0',
    gap:'30px',}}>
         <Box sx={{ color:'#c037c0 ',
    display:'flex',
    flexDirection:'column',
    padding:'30px 0',
    }}>
             <Typography sx={{fontSize:'60px',fontWeight:'bolder',
             "@media (max-width:820px)":{
              fontSize:'30px'
            } ,
              "@media (max-width:400px)":{
                width:'70%',
                ml:'40px'
            },
}}>Exclusive </Typography>
             <Typography sx={{fontSize:'60px',fontWeight:'bolder',
              "@media (max-width:820px)":{
              fontSize:'30px'
            },
              "@media (max-width:400px)":{
                width:'70%',
                ml:'40px'
            },
}}>Offers For You</Typography>
         </Box>
         <Typography sx={{color:'#565656',fontWeight:'bolder',"@media(max-width:400px)":{
      width:'70%',
      ml:'40px'
     }}}>ONLY ON BEST SELLERS PRODUCTS</Typography>

         <Box sx={{   background:'linear-gradient(180deg,#8d828d,#8b8888,#ac8989 60%)',
    width:'200px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'15px 10px',
    borderRadius:'20px',
    color:'#fff',
    cursor:'pointer',
    "@media (max-width:400px)":{
      width:'70%',
      ml:'40px'
  },}}><Typography>Check now</Typography></Box>
        </Box>
        <Box sx={{display:'flex',
  justifyContent:'center',
  alignItems:'center',}}>
         <CardMedia image={w2} alt='offer' sx={{width:'380px',
    height:'440px',}}/>
        </Box>
     </Box>
    </Box>
    </Box>
    </>
  )
}

export default Offer