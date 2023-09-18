import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  loggedIn: boolean = false;
  userName: string = 'Harry Potter';
  loginBtnText: string = 'Login';
  logoutBtnText: string = 'Logout';

  authenticate() {
    this.loggedIn = !this.loggedIn;
  }
}
