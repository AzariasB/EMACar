import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public user: any = {
        username: 'hello',
        password: 'you'
    }

    private message: string;

    private loading = false;

    constructor(private userService: UserService,
        private router: Router) {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }

    }

    submitLogin() {
        this.message = null;
        this.loading = true;
        this.login();
    }

    login() {
        this.userService.login(this.user.username, this.user.password, this.loggedIn);
    }

    loggedIn = (resp, message) => {
        this.loading = false;
        if (resp) {
            this.router.navigate(['/home']);
        } else {
            this.message = (message.source === "timeout-auth") ? "Impossible de se connecter au serveur des Mines" :
                "Mot de passe ou nom d'utilisateur incorrect";
        }
    }
}