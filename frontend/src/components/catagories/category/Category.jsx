import { Link } from 'react-router-dom';
import {CardActionArea,CardContent,Typography } from '@mui/material';
import {
  StyledCard,
  StyledCardMedia,
  StyledTypography,
  StyledPriceContainer,
  StyledOldPriceTypography,
} from './styles';
const Category = ({post}) => {
  return (
    <>
     <StyledCard>
     <CardActionArea>
       <Link to={`/product/${post?._id}`}>
         <StyledCardMedia
           image={post?.image}
           alt="img"
         />
       </Link>
       <CardContent>
         <StyledTypography>{post?.title}</StyledTypography>
         <StyledPriceContainer>
           <Typography>${post?.newPrice}</Typography>
           <StyledOldPriceTypography>
             ${post?.oldPrice}
           </StyledOldPriceTypography>
         </StyledPriceContainer>
       </CardContent>
     </CardActionArea>
   </StyledCard>
    </>
  )
}
export default  Category