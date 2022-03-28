import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const MaterialUIPickers = () => {
  const [value, setValue] = React.useState<null | string>(
    format(new Date(), 'MM/dd/yyyy')
  );

  const handleChange = (newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Date desktop"
        views={['year', 'month']}
        value={value}
        onChange={handleChange}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default MaterialUIPickers;
