import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Card,CardActionArea,CardContent, CardMedia, Typography } from '@mui/material'
import { img_url } from '../../api'
const NewCollection = ({newCollection}) => {
  return (
    <>
    <Card sx={{width:'270px'}}>
     <CardActionArea>
     <Link to={`/${newCollection._id}`}><CardMedia image={`${img_url}${newCollection.image}`} sx={{minHeight:'300px',transition:'all 3s',}} alt='img'/></Link>
       <CardContent>
          <Typography sx={{color:'rgba(75, 68, 68, 0.9)'}}>{newCollection.title}</Typography>
          <Box  sx={{  fontWeight:'bolder',display:'flex',gap:'18px',}}>
          <Typography >${newCollection.newPrice}</Typography>
          <Typography sx={{  textDecoration:'line-through',color:'rgba(131, 127, 127, 0.5)',}}>${newCollection.oldPrice}</Typography>

          </Box>
       </CardContent>
     </CardActionArea>
    </Card >
    </>
  )
}

export default NewCollection