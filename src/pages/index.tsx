import Main from 'components/Main';
import VerticalLinearStepper from '../components/VerticalStepper';
import { TextField } from '@mui/material';
import MaterialUIPickers from '../components/DatePicker';
import FormInputData from '../components/FormInputData';
import { useState } from 'react';
import { OperationType } from '../utils/operation/operation';

const Home = () => {
  const [mediumPrice, setMediumPrice] = useState(0);
  const [mediumQuantity, setMediumQuantity] = useState(0);
  const [accumulatedLoss, setAccumulatedLoss] = useState(0);
  const [operation, setOperation] = useState([]);
  const [referenceMonth, setReferenceMonth] = useState('');
  const [formState, setFormState] = useState({
    price: '',
    quantity: '',
    tax: '',
    type: OperationType.BUY,
  });
  const [actionName, setActionName] = useState('');

  const steps = [
    {
      label: 'Nome da Ação',
      body: (
        <TextField
          value={actionName}
          id="name"
          label="Ex: PETR4"
          onChange={e => setActionName(e.target.value)}
        />
      ),
    },
    {
      label: 'Mês de referência',
      body: (
        <MaterialUIPickers
          onChange={setReferenceMonth}
          label={'Selecione o mês de referência'}
        />
      ),
    },
    {
      label: 'Cadastro dos dados',
      body: <FormInputData formState={formState} setFormState={setFormState} />,
    },
  ];

  return (
    <Main>
      <VerticalLinearStepper steps={steps} />
    </Main>
  );
};

export default Home;
