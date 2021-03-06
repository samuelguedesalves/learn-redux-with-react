import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme} >
      <CSSReset/>
      { children }
    </ChakraProvider>
  )
}

export default ThemeContainer;