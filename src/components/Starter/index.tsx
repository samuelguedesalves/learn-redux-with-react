import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BooksListage from "../BooksListage";

const Starter: React.FC = () => {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/new");
  };

  return (
    <Box>
      <Container 
        maxWidth="container.lg" 
        paddingTop="4"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text 
            fontSize="2xl"
            fontWeight="medium"
            color="gray.600"
          >Books list</Text>
          <Button 
            colorScheme="green" leftIcon={<FaPlus/>} 
            onClick={goToCreate}
          >
            Create new book
          </Button>
        </Box>
        <Box
          paddingTop="3"
        >
          <BooksListage />
        </Box>
      </Container>
    </Box>
  );
};

export default Starter;
