import Main from 'components/Main';
import VerticalLinearStepper from '../components/VerticalStepper';
import { TextField } from '@mui/material';
import OptionButton from '../components/OptionButton';

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
      body: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];

  return (
    <Main>
      <VerticalLinearStepper steps={steps} />
    </Main>
  );
};

export default Home;
