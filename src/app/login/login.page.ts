import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  constructor(
    public nav: NavController,
    private service: AppService
  ) { }

  userName: String;
  password: String;
  msgError: String;

  ngOnInit() {
  }

  onLogin () {
    this.msgError = '';

    if (this.userName && this.password) {
      this.nav.navigateForward('/tabs/explore');
    } else {
      this.msgError = 'Please specify User Name and Password.'
    }
  }

}
