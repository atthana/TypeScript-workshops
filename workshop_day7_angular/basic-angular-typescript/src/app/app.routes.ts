import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./feature/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./feature/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./feature/contact/contact.component').then((m) => m.ContactComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./feature/about/about.component').then((m) => m.AboutComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found/not-found.component').then((m) => m.NotFoundComponent)
    }
];
