import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {



  resetUserAvailable = true;
  userName = '';

  // constructor() {
  //   setTimeout(() => {
  //     this.resetUserAvailable = false;
  //   },2000); 
  //  }

  userNameButtonActivate() {
    this.resetUserAvailable = false;
  }

  userNameReset() {
    this.userName = '';
    this.resetUserAvailable = true;
  }

}
