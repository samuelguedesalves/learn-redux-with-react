import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBook } from '../../books';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import { Box, Button, Container, Grid, Text } from '@chakra-ui/react';

type RouteParamsProps = {
  id: string;
}

const BookInfo: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const params = useParams() as RouteParamsProps;

  const book = books.find(item => item.id == parseInt(params.id))

  const goToHome = () => navigate("/");

  const removeAtlist = () => {
    if (book) {
      dispatch(removeBook(book))
      goToHome()
    }
  }

  return (
    <Container 
      maxWidth="container.sm" 
      paddingTop="4"
    >
      <Grid
        gridTemplateColumns="1fr 2fr 1fr"
        templateAreas="'back-button screen-title remove-button'"
        justifyContent="center"
        alignItems="center"
        marginBottom="6"
      >
        <Button
          gridArea="back-button" 
          leftIcon={<FaArrowLeft/>}
          colorScheme="gray"
          width="fit-content"
          onClick={goToHome}
        >Back to listage</Button>
        <Text
          gridArea="screen-title"
          textAlign="center"
          fontSize="2xl"
          fontWeight="medium"
          color="gray.600"
        >Book details</Text>
        <Button
          gridArea="remove-button" 
          leftIcon={<FaTrashAlt/>}
          colorScheme="red"
          width="fit-content"
          onClick={removeAtlist}
        >Remove book</Button>
      </Grid>
      <Box
        paddingTop="4"
      >
        <Text
          fontSize="xl"
          fontWeight="medium"
          marginBottom="2"
          textAlign="center"
        >{book?.title}</Text>
        <Text
          fontSize="lg"
          textAlign="center"
        >{book?.description}</Text>
      </Box>
    </Container>
  )
}

export default BookInfo;