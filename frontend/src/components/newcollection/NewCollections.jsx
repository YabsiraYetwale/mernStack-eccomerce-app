import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress} from '@mui/material'
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
    return <Container>{<CircularProgress/>}</Container>
  }

  return (
    <>
      <Container>
        <Heading>NEW COLLECTIONS<hr/></Heading>
        <CollectionContainer>
          {products.slice(1).slice(-8).map((newCollection, i) => (
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