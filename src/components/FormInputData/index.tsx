import React from 'react';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import InputCurrency from '../CurrencyInput';
import * as S from './styles';
import { OperationType } from '../../utils/operation/operation';

interface IFormInputData {
  setFormState: (state: any) => void;
  formState: IFormState;
}

interface IFormState {
  tax: number;
  type: OperationType;
  quantity: number;
  price: number;
}

const FormInputData: React.FC<IFormInputData> = ({
  setFormState,
  formState,
}) => {
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setFormState((prevState: any) => ({
      ...prevState,
      type: event.target.value as OperationType,
    }));
  };

  const handleChangeInputCurrency = (event: { target: { value: string } }) => {
    setFormState((prevState: any) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const handleChangeInputQuantity = (event: { target: { value: string } }) => {
    setFormState((prevState: any) => ({
      ...prevState,
      quantity: event.target.value,
    }));
  };

  const handleChangeTax = (event: { target: { value: string } }) => {
    setFormState((prevState: any) => ({
      ...prevState,
      tax: event.target.value,
    }));
  };

  return (
    <S.Container>
      <Select value={formState.type} onChange={handleChangeSelect}>
        <MenuItem value={OperationType.BUY}>Compra</MenuItem>
        <MenuItem value={OperationType.SELL}>Venda</MenuItem>
      </Select>
      <InputCurrency
        onChange={handleChangeInputCurrency}
        value={formState.price}
        inputMode="numeric"
        prefix="R$ "
        placeholder="R$ 0"
      />
      <TextField
        onChange={handleChangeInputQuantity}
        value={formState.quantity}
        sx={{ width: '50%' }}
        inputMode="numeric"
        placeholder="Quantidade"
      />
      <TextField
        onChange={handleChangeTax}
        value={formState.tax}
        sx={{ width: '50%' }}
        inputMode="decimal"
        placeholder="Taxa de corretagem"
      />
    </S.Container>
  );
};
export default FormInputData;
