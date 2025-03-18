import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor() {
    this.printMessage();
  }

  printMessage() {
    console.log('Esta es la pantalla de log in');
  }

}