import * as S from './styles';
import React from 'react';
import { CurrencyInputProps } from 'react-currency-input-field/src/components/CurrencyInputProps';

const InputCurrency: React.FC<CurrencyInputProps> = ({ ...args }) => (
  <S.InputCurrency {...args} />
);

export default InputCurrency;
