import { FieldRenderProps } from 'react-final-form';

export interface IOption {
  value: string;
  label: string;
}

export type IOptions = Array<IOption>;

export interface IProps extends FieldRenderProps<string, any> {
  name: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  options: IOptions;
}
