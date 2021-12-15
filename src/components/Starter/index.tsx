import React from "react";
import BooksListage from "../BooksListage";
import { Box, Container } from "@chakra-ui/react";

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
