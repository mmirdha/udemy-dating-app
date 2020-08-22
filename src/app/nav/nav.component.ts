import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authSerice: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authSerice.login(this.model).subscribe(
      next => {
        this.alertify.success('Logged in successfully');
      },

      error => {
        this.alertify.error(error);
      }
    );
  }

  loggedIn(): boolean {
    return this.authSerice.loggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
