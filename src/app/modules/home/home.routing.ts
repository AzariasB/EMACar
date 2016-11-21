import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CovoiturageListComponent } from '../covoiturage/covoit.component';
import { CreateComponent } from '../covoiturage/create/create.component'
import { AboutComponent} from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

import { CanActivateViaAuthGuard } from '../../service/guard.service';


export const routes: Routes = [
    { 
        path: 'home', 
        canActivate : [CanActivateViaAuthGuard],
        component: HomeComponent,
        children :  [
            {path : '', component : CovoiturageListComponent},
            {path : 'create', component : CreateComponent },
            {path : 'about', component : AboutComponent},
            {path : 'profile', component : ProfileComponent}
        ]
    }
];

export const routing = RouterModule.forChild(routes);