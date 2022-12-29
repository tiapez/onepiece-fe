import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserIntService } from 'src/app/Service/Interface/User/user-int.service';
import { CryptServiceImpl } from 'src/app/Service/Utility/CryptImpl/crypt-impl.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private userService: UserIntService, private router: Router, private cookie: CookieService
    , private cryptServiceImpl: CryptServiceImpl) { }
  public user: string = "";
  public password: string = "";
  public error: string = "";
  public nick: string = "";
  public navbar : string = "";
  public headers!: Headers;

  loginButton() {
    const user = this.cryptServiceImpl.setUserCrypt(this.user);
    const password = this.cryptServiceImpl.setPassCrypt(this.password);
    this.userService.loginValidation(user, password).subscribe({
      next: data => this.nick = data,
      error: err => this.error = err,
      complete: () => this.redirect()
    });
  }

  redirect() {
    this.navbar = this.nick.split('/')[1];
    this.nick = this.nick.split('/')[0];
    this.cookie.set(this.cryptServiceImpl.nickCookie, this.cryptServiceImpl.setNickCrypt(this.nick),{expires : 9999999999999});
    this.cookie.set("navType", this.navbar,{expires : 99999999999999});
    this.router.navigate(['home', {esit: 'SignIn'}]);

  }
}
