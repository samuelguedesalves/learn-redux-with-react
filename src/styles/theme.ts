import { extendTheme, theme, Theme } from '@chakra-ui/react';

const customTheme: Theme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  }
}

export default extendTheme(customTheme);