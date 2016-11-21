import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!localStorage.getItem('id_token');
  }

  private getHeaders() {
    return {
      headers: new Headers({
        "Content-type": "application/json",
        "authorization": localStorage.getItem('id_token')
      })
    }
  }

  public getUser(callback: Function = () => { }) {
    this.http.post('/covoiturage/user', {}, new RequestOptions(this.getHeaders()))
      .map((res: Response) => res.json())
      .subscribe(
      (res: Response & { user: Object }) => {
        if (res.user) callback(res.user);
      },
      (error: Error) => {
        console.log("could not get user", error);
      }
      )
  }

  public updateUser(user: Object, callback: Function = () => { }) {
    this.http.post('/covoiturage/updateuser', JSON.stringify({ updated: user }), new RequestOptions(this.getHeaders()))
             .map((res : Response) => res.json())
             .subscribe(
               (res : Response & {user : Object}) => {
                 callback(res.user);
               },
               (error : Error) => {
                 console.log("Could not update user",error);
               }
             )
  }

  login(email: string, password: string, callback: Function) {
    this.http.post("/login", JSON.stringify({ password: password, username: email }), new RequestOptions({
      headers: new Headers({ "Content-Type": "application/json" })
    }))
      .map((res: Response) => res.json())
      .subscribe(
      (res: Response & { jwt: string, message: string }) => {
        if (res.message) {
          callback(false, res);
          this.loggedIn = false;
        } else {
          localStorage.setItem("id_token", res.jwt);
          this.loggedIn = true;
          callback(true);
        }
      },
      (error: Error) => { console.log(error); }
      );
  }

  logout(redirection: boolean = true) {
    localStorage.removeItem('id_token');
    this.loggedIn = false;
    if (redirection) {
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}