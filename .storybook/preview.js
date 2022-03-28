import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme/theme';


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
