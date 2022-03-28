export interface IVerticalStepperOptions {
  steps: IStepsOptions[];
}

interface IStepsOptions {
  label: string;
  body: string | JSX.Element;
}
