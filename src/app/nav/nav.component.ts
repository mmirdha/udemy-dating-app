import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authSerice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authSerice.login(this.model).subscribe(
      next => {
        console.log("Logged in successfully");
      },

      error => {
        console.log("Logged in failed");
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');

    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
