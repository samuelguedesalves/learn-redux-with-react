import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../../books";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Input, 
  Text, 
  Textarea 
} from "@chakra-ui/react";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/");
  };

  const saveBook = () => {
    if (Boolean(info.title.trim()) && Boolean(info.description.trim())) {
      dispatch(addBook(info));
      goToHome();
    }
  };

  return (
    <Box>
      <Container 
        maxWidth="container.sm" 
        paddingTop="3"
      >
        <Grid
          gridTemplateColumns="1fr 2fr 1fr"
          templateAreas="'back-button screen-title .'"
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
          >Create a book</Text>
        </Grid>

        <Box marginBottom="3" >
          <Text fontSize="lg" >Book name</Text>
          <Input 
            placeholder="place here book name" 
            onChange={(e) => setInfo({ ...info, title: e.target.value })}
          />
        </Box>
        
        <Box marginBottom="3">
          <Text fontSize="lg" >Book description</Text>
          <Textarea 
            placeholder='place here book description' 
            onChange={(e) => setInfo({ ...info, description: e.target.value })}
          />
        </Box>

        <Button
          width="full"
          colorScheme="blue"
          onClick={saveBook}
          leftIcon={<FaPlus/>}
        >
          Save book
        </Button>
      </Container>
    </Box>
  );
};

export default Form;
