import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import template from './home.component.html';
import { googlePlacesAPI } from '../../config';
import { CovoiturageListComponent } from '../covoiturage/covoit.component';

@Component({
    selector: 'app-home',
    template,
    styles: [
        '#main_search .prompt{border-radius : 0rem;}'
    ]
})
@Injectable()
export class HomeComponent implements OnInit {
    error: string;
    listCom: CovoiturageListComponent;

    response: {};

    constructor(private router: Router,
        private userService: UserService) {
    }


    ngOnInit() {
        $('#main_search').search({
            apiSettings: googlePlacesAPI,
            onSelect: (result) => {
                let query = result.title;
                if (this.listCom) {
                    this.callSearch(query);
                } else {
                    this.router.navigate(['/home'])
                        .then(done => {
                            if (done) {
                                this.callSearch(query);
                            }
                        })
                }
            }
        });
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/login']);
    }

    onActivate(component) {
        if (component instanceof CovoiturageListComponent) {
            this.listCom = component;
        } else {
            this.listCom = null;
        }
    }

    resetSearch(input) {
        if (this.listCom) {
            this.listCom.resetSearch();
        } else {
            this.router.navigate(['/home'])
                .then((done) => {
                    this.listCom.resetSearch();
                });
        }
        input.value = '';
    }

    private callSearch(query) {
        this.listCom.search(query);
    }
}
