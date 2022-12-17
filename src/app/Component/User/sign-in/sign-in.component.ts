import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignServiceService } from 'src/app/Service/SignService/sign-service.service';
import { UserService } from 'src/app/Service/Utility/User/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private signService: SignServiceService, private router: Router, private cookie: CookieService
    , private userService: UserService) { }
  public user: string = "";
  public password: string = "";
  public error: string = "";
  public nick: string = "";
  public navbar : string = "";
  public headers!: Headers;

  loginButton() {
    const user = this.userService.setUserCrypt(this.user);
    const password = this.userService.setPassCrypt(this.password);
    this.signService.loginValidation(user, password).subscribe({
      next: data => this.nick = data,
      error: err => this.error = err,
      complete: () => this.redirect()
    });
  }

  redirect() {
    this.navbar = this.nick.split('/')[1];
    this.nick = this.nick.split('/')[0];
    this.cookie.set(this.userService.nickCookie, this.userService.setNickCrypt(this.nick),{expires : 9999999999999});
    this.cookie.set("navType", this.navbar,{expires : 99999999999999});
    this.router.navigate(['home', {esit: 'SignIn'}]);

  }
}
