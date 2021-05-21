import { IOptions } from '../components/form/SelectField/interfaces';

export enum Roles {
  USER = '10',
  ADMIN_COMPANY = '50',
  ADMIN = '100'
}

export const roleList: IOptions = [
  {
    value: Roles.USER,
    label: 'Пользователь'
  },
  {
    value: Roles.ADMIN_COMPANY,
    label: 'Админ компании'
  },
  {
    value: Roles.ADMIN,
    label: 'Админ системы'
  },
]
