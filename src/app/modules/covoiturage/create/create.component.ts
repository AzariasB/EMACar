import { Component } from "@angular/core";
import { Http, Headers, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { calendarConf, dropdownConf } from '../../../config';
import { UserService } from '../../../service/user.service';

import template from './create.component.html';

@Component({
    selector: "covoit-create",
    template
})
export class CreateComponent {

    public dummyDate: string;
    public submitted: boolean = false;

    public covoit = {
        description: '',
        date: null,
        from: '',
        to: '',
        steps: []
    };

    constructor(private http: Http, private userService : UserService) {

    }


    ngAfterContentInit() {
        $('.ui.dropdown').dropdown(dropdownConf);
        let change = (date, text) => {
            this.dummyDate = text;
        }
        $('#day').calendar(calendarConf(change));
    }

    private checkValues() : boolean
    {
        return this.covoit.from && this.covoit.to && this.covoit.date;
    }

    public submit($ev) {
        $ev.preventDefault();
        this.covoit.date = $('#day').calendar('get date');
        //remove doublon
        this.covoit.steps = this.covoit.steps.filter(a => a != this.covoit.from && a != this.covoit.to);
        if(!this.checkValues())return;


        this.http.post('/covoiturage/create', JSON.stringify(this.covoit), new RequestOptions({
            headers: new Headers({ 
                "Content-type": "application/json",
                "authorization" : localStorage.getItem('id_token')
             })
        })).map((res: Response) => res.json())
            .subscribe(
                (res: Response & { covoit }) => {
                this.submitted = true;
                this.covoit = res.covoit;
            },(error : Error & {status : number}) => {
                error.status === 403 && this.userService.logout();
            });
    }

    public validDate() {
        var d = $('#day').calendar('get date');
        console.log(d);
        return false;
    }

}
