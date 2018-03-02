import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ConnexionService } from '../../service/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  //authUser: User = new User();
  authUser2: User = new User();
  constructor(private serviceConnex: ConnexionService, private router: Router) { }

  ngOnInit() {
    

  }
  login():void {
    console.log(this.authUser2.login +'  ' +this.authUser2.pass);

    this.serviceConnex.connexion(this.authUser2).subscribe();

    //this.router.navigate(['/help']);
  }

  onLogin(): void {
    this.serviceConnex.login(this.authUser2)
    .then((user) => {
      console.log('!!!!!!!!!!');
      console.log(user.json());
    })
    .catch((err) => {
      console.log(err);
    });
  }


}


