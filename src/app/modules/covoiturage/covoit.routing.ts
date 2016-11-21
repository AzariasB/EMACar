import { Routes, RouterModule } from '@angular/router';

import { CovoiturageListComponent } from './covoit.component';
import { CreateComponent } from './create/create.component';

import { CanActivateViaAuthGuard } from '../../service/guard.service';

export const routes: Routes = [
    { 
        path: 'create',
        component: CreateComponent,
        canActivate : [CanActivateViaAuthGuard]
    },
];

export const routing = RouterModule.forChild(routes);