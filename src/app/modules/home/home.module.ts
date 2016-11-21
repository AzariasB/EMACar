import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import { CovoitModule } from "../covoiturage/covoit.module";

import { AboutComponent} from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

import { UserService } from '../../service/user.service';
import { CanActivateViaAuthGuard } from '../../service/guard.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        routing,
        SharedModule.forRoot(),
        CovoitModule
    ],
    declarations: [
        HomeComponent, AboutComponent, ProfileComponent
    ],
    bootstrap: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers : [UserService, CanActivateViaAuthGuard]
})
export class HomeModule { }