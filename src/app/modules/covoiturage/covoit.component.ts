import { Component, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { UserService } from '../../service/user.service';
import template from './covoit.component.html';

@Component({
    selector: "covoit-list",
    template
})

@Injectable()
export class CovoiturageListComponent {
    covoiturages: Object[] = [];
    constructor(private router: Router,
        private http: Http, private userService: UserService) {
        this.getCovoiturages();
    }

    getCovoiturages() {
        this.http.post("/covoiturage/list", {}, new RequestOptions({
            headers: new Headers({
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("id_token")
            })
        }))
            .map((res: Response) => res.json())
            .subscribe(
            (res: Response & { covs: Object[] }) => {
                this.covoiturages = res.covs;
            },
            (error: Error & {status : number}) => { 
                if(error.status === 403) this.userService.logout();
             }
            );
    }
}