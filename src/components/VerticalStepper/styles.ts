import styled, { css } from 'styled-components';

export const Container = styled.main`
  text-align: left;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;
