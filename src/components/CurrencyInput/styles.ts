import styled, { css } from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const InputCurrency = styled(CurrencyInput)`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    border-color: #b7b7b7;
    background: none;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    text-align: center;
    display: flex;
  `}
`;
