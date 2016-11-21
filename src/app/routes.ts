import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren : 'app/modules/home/home.module#HomeModule'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });