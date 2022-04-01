import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface IMaterialUiDatePickerProps {
  label: string;
  onChange: (value: string) => void;
}

const MaterialUIPickers: React.FC<IMaterialUiDatePickerProps> = ({
  onChange,
  label,
}) => {
  const [value, setValue] = React.useState<null | string>(
    format(new Date(), 'MM/dd/yyyy')
  );

  const handleChange = (newValue: string | null) => {
    if (newValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        views={['year', 'month']}
        value={value}
        onChange={handleChange}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default MaterialUIPickers;
