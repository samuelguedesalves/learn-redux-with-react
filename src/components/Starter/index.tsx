import { Box, Container } from "@chakra-ui/react";
import React from "react";
import BooksListage from "../BooksListage";

const Starter: React.FC = () => {
  return (
    <Box>
      <Container 
        maxWidth="container.sm" 
        paddingTop="4"
      >
        <BooksListage />
      </Container>
    </Box>
  );
};

export default Starter;
