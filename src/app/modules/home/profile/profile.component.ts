import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import template from './profile.component.html';

@Component({
    selector: 'profile',
    template,
    styles : [
        '.segment {font-size : 18px;}'
    ]
})
export class ProfileComponent {

    private user: any;

    constructor(private userService: UserService) {
        let func = user => this.user = user;
        this.userService.getUser(func);
    }

    public triggerPhoneModal()
    {
        $('#phone_modal').modal('show');
    }

    public submitPhone($event,phoneInput)
    {
        $event.preventDefault();
        let phoneNumber = phoneInput.value;
        if(phoneNumber && phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber) ){
            phoneInput.value = '';
            this.user.phoneNumber = phoneNumber;
            let func = user => this.user = user;
            this.userService.updateUser(this.user,func);
        }
    }
}
