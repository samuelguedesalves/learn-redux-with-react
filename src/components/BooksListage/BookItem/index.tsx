import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Book } from "../../../books";

const BookItem: React.FC<Book> = ({ id, title, description }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/info/${id}`)
  }

  return (
    <Box
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      p="2"
      mb="3"
      display="grid"
      gridTemplateColumns="1fr 40px"
      onClick={goToDetails}
    >
      <Box>
        <Text
          fontSize="xl"
          color="gray.800"
        >{title}</Text>
        <Text
          color="gray.500"
          >{description}</Text>
      </Box>
      <Box
        color="blue.300"
        fontSize="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FaArrowRight/>
      </Box>
    </Box>
  );
};

export default BookItem;
