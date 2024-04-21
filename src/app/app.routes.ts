import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./main/login/login.component'),
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./main/shared/main/main.component'),
  },

  /*  {
    path: 'register',
    loadComponent: () =>(),
  }, */

  { path: '**', redirectTo: 'home' },
];
