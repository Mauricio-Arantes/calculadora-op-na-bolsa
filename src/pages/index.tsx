import Main from 'components/Main';
import VerticalLinearStepper from '../components/VerticalStepper';
import { TextField } from '@mui/material';
import OptionButton from '../components/OptionButton';
import MaterialUIPickers from '../components/DatePicker';

const Home = () => {
  const steps = [
    {
      label: 'Nome da Ação',
      body: <TextField id="stock-input-name" label="Ex: PETR4" />,
    },
    {
      label: 'Tipo de operação',
      body: <OptionButton />,
    },
    {
      label: 'Mês de referência',
      body: <MaterialUIPickers />,
    },
    {
      label: 'Cadastro dos dados',
      body: <MaterialUIPickers />,
    },
  ];

  return (
    <Main>
      <VerticalLinearStepper steps={steps} />
    </Main>
  );
};

export default Home;
