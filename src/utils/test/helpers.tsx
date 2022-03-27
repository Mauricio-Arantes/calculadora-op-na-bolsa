import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import theme from 'styles/theme/theme';

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
