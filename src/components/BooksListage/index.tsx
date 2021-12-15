import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { getBooks } from "../../books";
import BookItem from "./BookItem";

const BooksListage: React.FC = () => {
  const navigate = useNavigate();
  const books = useSelector(getBooks);

  const goToCreate = () => {
    navigate("/new");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="6"
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
      <Box>
        {books.map((item, index) => (
          <BookItem
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </>
  );
};

export default BooksListage;
