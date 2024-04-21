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

  {
    path: 'register',
    title: 'Registration page',
    loadComponent: () => import('./main/register/register.component'),
  },

  { path: '**', redirectTo: 'home' },
];
