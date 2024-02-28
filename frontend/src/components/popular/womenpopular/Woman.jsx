import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Card,CardActionArea,CardContent, CardMedia, Typography } from '@mui/material'
import { img_url } from '../../../api'
const Woman = ({woman}) => {
  return (
    <>
   {woman.category === "women" && 
   <Card sx={{width:'270px'}}>
     <CardActionArea>
     <Link to={`/${woman._id}`}><CardMedia image={`${img_url}${woman.image}`} sx={{minHeight:'300px',transition:'all 3s',}} alt='img'/></Link>
       <CardContent>
          <Typography sx={{color:'rgba(75, 68, 68, 0.9)'}}>{woman.title}</Typography>
          <Box  sx={{  fontWeight:'bolder',display:'flex',gap:'18px',}}>
          <Typography >${woman.newPrice}</Typography>
          <Typography sx={{  textDecoration:'line-through',color:'rgba(131, 127, 127, 0.5)',}}>${woman.oldPrice}</Typography>

          </Box>
       </CardContent>
     </CardActionArea>
    </Card >}
    </>
  )
}

export default Woman