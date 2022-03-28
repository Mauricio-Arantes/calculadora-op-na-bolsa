import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const OptionButton: React.FC = () => (
  <FormControl>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Compra" />
      <FormControlLabel value="male" control={<Radio />} label="Venda" />
    </RadioGroup>
  </FormControl>
);

export default OptionButton;
