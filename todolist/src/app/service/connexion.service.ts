import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnexionService {
  private urlConnexion: string = `/daq/dynamic/connect.json`;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) {

  }

  login(user:User):Promise<any>{
    return this.http.post(this.urlConnexion,user,{headers: this.headers}).toPromise();
  }

  public connexion(user: User): Observable<User> {

    console.log("envoi d'un requete");

   return this.http.post(this.urlConnexion, "login: "+user.login +"\npass: "+user.pass).map(res => res.json());
       
  }

}



/*
constructor(private http: Http) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('authentication', `hello`);

  const options = new RequestOptions({headers: headers});
  this.http.post(
    "http://localhost:3000/contacts",
    JSON.stringify({id: 4, name: 'some'}),
    options
  ).subscribe();
*/
