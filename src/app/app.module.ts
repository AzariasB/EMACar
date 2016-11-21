import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from "./routes";
// import { HelloComponent } from "./components/shared/hello.component";
import { CovoitModule } from "./modules/covoiturage/covoit.module";
import { HomeModule } from "./modules/home/home.module";
import { LoginModule } from './modules/login/login.module';

import { UserService } from './service/user.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        CovoitModule,
        HomeModule,
        LoginModule,
        routing
    ],
    providers: [
        provideAuth({
            globalHeaders: [{"Content-type": "application/json"}],
            //newJwtError: true,
            noTokenScheme: true
        }),
        UserService
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent,  ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
