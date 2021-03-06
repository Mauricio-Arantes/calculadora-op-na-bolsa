import { Meta } from '@storybook/react/types-6-0';

import VerticalLinearStepper from '.';

export default {
  title: 'VerticalLinearStepper',
  component: VerticalLinearStepper,
} as Meta;

const steps = [
  {
    label: 'Select campaign settings',
    body: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    body: 'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    body: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export const VerticalStepperStory = () => (
  <VerticalLinearStepper steps={steps} />
);
