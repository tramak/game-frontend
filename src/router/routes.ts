import { IRouter } from '../redux/auth/interfaces';
import * as pages from '../pages';
import MainLayout from '../layouts/MainLayout';
import { Roles } from '../intefaces/role';

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
    layout: MainLayout,
    allow: [ Roles.ADMIN ],
  },
  {
    path: '/company/add',
    exact: true,
    component: pages.CompanyAddPage,
    layout: MainLayout,
    allow: [ Roles.ADMIN ],
  },
  {
    path: '/company/edit/:id',
    exact: true,
    component: pages.CompanyEditPage,
    layout: MainLayout,
    allow: [ Roles.ADMIN ],
  },
  {
    path: '/users',
    exact: true,
    component: pages.Users,
    layout: MainLayout
  },
  {
    path: '/user/add',
    exact: true,
    component: pages.UserAddPage,
    layout: MainLayout
  },
  {
    path: '/user/edit/:id',
    exact: true,
    component: pages.UserEditPage,
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
    component: pages.Users,
    layout: MainLayout
  },
  {
    path: '/game/:token',
    exact: true,
    component: pages.GamePage
  },
]
