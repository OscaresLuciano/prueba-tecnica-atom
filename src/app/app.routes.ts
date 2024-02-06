import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
    
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LayoutComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    
];
