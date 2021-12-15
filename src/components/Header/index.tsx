import React from "react";
import { useSelector } from "react-redux";
import { FaFile } from 'react-icons/fa';
import { getBooks } from "../../books";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  const books = useSelector(getBooks);

  return (
    <Box bgColor="blue.400" >
      <Container 
        maxW="container.sm" 
        paddingY="3" 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        color="gray.100" 
      >
        <Heading 
          fontWeight="medium"
          fontSize="3xl" 
        >Book Explorer</Heading>
        <Box 
          fontSize="2xl" 
          display="flex" 
          alignItems="center" 
          columnGap="2" 
        >
          <FaFile/>
          <Text>{books.length}</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
