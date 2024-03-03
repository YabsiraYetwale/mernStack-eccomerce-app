import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress} from '@mui/material'
import { WomenContainer,Heading, ProductContainer} from './styles';
import { fetchProducts } from '../../../actions/product'
import { useEffect } from 'react'
import Woman from './Woman'

const Women = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) {
    return null;
  }

  if (isLoading) {
    return <WomenContainer>{<CircularProgress/>}</WomenContainer>
  }

  return (
    <>
      <WomenContainer>
        <Heading>POPULAR IN WOMEN<hr/></Heading>
        <ProductContainer>
          {products.slice(0,7).map((post, i) => (
            <Box key={i}>
              <Woman post={post} />
            </Box>
          ))}
        </ProductContainer>
      </WomenContainer>
    </>
  );
};

export default Women;
