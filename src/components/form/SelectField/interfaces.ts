export interface IOption {
  value: string;
  label: string;
}

export type IOptions = Array<IOption>;

export interface IProps {
  name: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  data: IOptions;
}
