import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../books";
import BookItem from "./BookItem";

const BooksListage: React.FC = () => {
  const books = useSelector(getBooks);

  return (
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
  );
};

export default BooksListage;
