import { IRouter } from '../redux/auth/interfaces';
import * as pages from '../pages';
import MainLayout from '../layouts/MainLayout';

export const routes: IRouter = [
  {
    path: '/',
    exact: true,
    component: pages.Index,
    layout: MainLayout
  },
  {
    path: '/singIn',
    exact: true,
    component: pages.SingIn
  },
  {
    path: '/error',
    exact: true,
    component: pages.Error
  },
]
