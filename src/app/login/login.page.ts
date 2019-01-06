import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  constructor(
    private service: AppService,
    private route: Router
  ) { }

  userName: String;
  password: String;
  msgError: String;

  ngOnInit() {
  }

  onLogin () {
    this.msgError = '';

    if (this.userName && this.password) {
      // this.nav.navigateForward('/tabs/explore');
      this.route.navigate(['/tabs/explore']);
    } else {
      this.msgError = 'Please specify User Name and Password.'
    }
  }

}
