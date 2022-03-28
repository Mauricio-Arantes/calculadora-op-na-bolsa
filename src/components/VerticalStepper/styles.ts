import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.medium} !important;
  `}
`;
