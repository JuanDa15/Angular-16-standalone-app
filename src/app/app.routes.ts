import { Routes } from '@angular/router';
import { userReducer } from './store/reducers';
import { provideState } from '@ngrx/store';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('src/app/public/home/home.component')
      .then(c => c.HomeComponent)
  },
  {
    path: 'user',
    children: [
      {
        path: 'list',
        loadComponent: () => import('src/app/user/list/list.component')
          .then(c => c.ListComponent)
      },
      {
        path: ':id',
        providers: [
          provideState('user', userReducer)
        ],
        loadComponent: () => import('src/app/user/user/user.component')
          .then(c => c.UserComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
