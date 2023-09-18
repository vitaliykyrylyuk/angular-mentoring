import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  loggedIn: boolean = true;
  userName: string = 'Harry Potter';
  loginBtnText: string = 'Login';
  logoutBtnText: string = 'Logout';

  infoTitle: string = 'Your List Is Empty';
  infoText: string = 'Please use \'Add New Course\' button to add your first course';
  addCourseBtnText: string = 'Add New Course';

  authenticate() {
    this.loggedIn = !this.loggedIn;
  }
}
