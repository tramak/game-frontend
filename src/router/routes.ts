import { IRouter } from '../redux/auth/interfaces';
import * as pages from '../pages';
import MainLayout from '../layouts/MainLayout';

export const routes: IRouter = [
  {
    path: '/singIn',
    exact: true,
    component: pages.SingIn
  },
  {
    path: '/companies',
    exact: true,
    component: pages.Companies,
    layout: MainLayout
  },
  {
    path: '/users',
    exact: true,
    component: pages.Users,
    layout: MainLayout
  },{
    path: '/user/add',
    exact: true,
    component: pages.UserAddPage,
    layout: MainLayout
  },
  {
    path: '/error',
    exact: true,
    component: pages.Error
  },
  {
    path: '/',
    exact: true,
    component: pages.Index,
    layout: MainLayout
  },
]
