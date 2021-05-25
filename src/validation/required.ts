import { TValidate } from './interfaces';

export const required = (textError = 'Обязательное поле'): TValidate => (value) => (value ? undefined : textError);
