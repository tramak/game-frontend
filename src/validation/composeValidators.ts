import { TValidate } from './interfaces';

export const composeValidators = (...validators: Array<TValidate>) => (value?: string) =>
  validators.reduce((error: string | undefined, validator: TValidate) => error || validator(value), undefined);
