import { IOptions } from '../components/form/SelectField/interfaces';

export enum Roles {
  USER = 'USER',
  ADMIN_COMPANY = 'ADMIN_COMPANY',
  ADMIN = 'ADMIN'
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
