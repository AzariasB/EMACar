import { Component,Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import template from './home.component.html';

@Component({
    selector: "home",
    template
})

@Injectable()
export class HomeComponent{
    error: string;
    response: {};

    constructor(private router : Router,
                private userService: UserService) {
                }
    
    logout(){
        this.userService.logout();
        this.router.navigate(['/login']);
    }

}
