import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    loadComponent: async () => (await import('./pages/home/home.component')).HomeComponent,
  },
];
