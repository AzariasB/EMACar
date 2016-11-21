import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { CovoiturageListComponent } from "./covoit.component";
import { routing } from "./covoit.routing";
import { SharedModule } from "../shared/shared.module";
import { CreateComponent } from "./create/create.component";
import { CovoiturageComponent } from "./covoiturage/covoiturage.component";
import { CanActivateViaAuthGuard } from '../../service/guard.service';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        routing,
        SharedModule.forRoot()
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [ CovoiturageListComponent, CovoiturageComponent ],
    declarations: [ CovoiturageListComponent, CreateComponent, CovoiturageComponent ],
    bootstrap:    [ CovoiturageListComponent ],
    providers  : [CanActivateViaAuthGuard]
})
export class CovoitModule { 
}