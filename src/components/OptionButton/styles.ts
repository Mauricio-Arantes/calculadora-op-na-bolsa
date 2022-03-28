import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    margin: 0 10% 0;
    height: 100vh;
    padding: ${theme.spacings.medium};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;
