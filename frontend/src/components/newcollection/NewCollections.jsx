import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress, Divider, Typography } from '@mui/material'
import { Container, Heading, CollectionContainer } from './styles';
import { fetchProducts } from '../../actions/product'
import { useEffect } from 'react'
import NewCollection from './NewCollection'

const NewCollections = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products) {
    return null;
  }

  if (isLoading) {
    return 'Loading ...';
  }

  return (
    <>
      <Container>
        <Heading>NEW COLLECTIONS<hr/></Heading>
        <CollectionContainer>
          {products.map((newCollection, i) => (
            <Box key={i}>
              <NewCollection newCollection={newCollection} />
            </Box>
          ))}
        </CollectionContainer>
      </Container>
    </>
  );
};

export default NewCollections;