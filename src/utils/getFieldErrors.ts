import { IErrors, IFieldErrors } from '../intefaces';

export const getFieldErrors = (error: IErrors) => {
  return error.reduce<IFieldErrors>((result, item) => {
    if (item.field && item.message) {
      result[item.field] = item.message;
    }

    return result;
  }, {});
}
