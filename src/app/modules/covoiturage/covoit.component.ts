import { Component, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { UserService } from '../../service/user.service';
import template from './covoit.component.html';

@Component({
    selector: 'covoit-list',
    template,
    styles : [
        '.ui.segment{margin-top:2rem;}'
    ]
})

@Injectable()
export class CovoiturageListComponent {
    covoiturages: any[] = [];
    filterCovoiturages: any[] = null;
    constructor(private router: Router,
        private http: Http, private userService: UserService) {
        this.getCovoiturages();
    }

    getCovoiturages() {
        this.http.post('/covoiturage/list', {}, new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('id_token')
            })
        }))
            .map((res: Response) => res.json())
            .subscribe(
            (res: Response & { covs: Object[] }) => {
                this.covoiturages = res.covs;
            },
            (error: Error & { status: number }) => {
                if (error.status === 403) {
                    this.userService.logout();
                }
            }
            );
    }

    public search(query) {
        this.filterCovoiturages = this.covoiturages.filter(cov => {
            // Implement fuzzy search ?
            return cov.from.indexOf(query) > -1 || cov.to.indexOf(query) > -1;
        });
    }

    public resetSearch(){
        this.filterCovoiturages = null;
    }
}
