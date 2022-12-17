import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRefDirective } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import { User } from 'src/app/Model/User/user.model';
import { SignServiceService } from 'src/app/Service/SignService/sign-service.service';
import { UserService } from 'src/app/Service/Utility/User/user.service';
import { ToastServiceImpl } from 'src/app/ServiceImpl/Card/Toast/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  constructor(private userService: SignServiceService, private us: UserService,
    private ts: ToastServiceImpl, private router: Router) { }
  public flag!: boolean;
  public flagUser1!: boolean;
  public flagUser2!: boolean;
  public flagPass!: boolean;
  public flagMail1!: boolean;
  public flagMail2!: boolean;
  public flagNick1!: boolean;
  public flagNick2!: boolean;
  public error: string = "";
  user: User = new User();

  saveUser() {
    this.convalidateUser();
    if (this.flag) {
      let userToSave = new User();
      userToSave.password = this.user.password;
      userToSave.username = this.user.username.toLowerCase();
      userToSave.mail = this.user.mail.toLowerCase();
      userToSave.nick = this.user.nick.toLowerCase();

      userToSave.password = this.us.setPassCrypt(userToSave.password);
      userToSave.username = this.us.setUserCrypt(userToSave.username);
      userToSave.nick = this.us.setNickCrypt(userToSave.nick);

      this.userService.saveUser(userToSave).subscribe({
        next: data => this.flag = data,
        error: err => this.error = err,
        complete: () => this.redirect()
      });
    } else {
      this.ts.userNotValid();
    }
  }

  userValidation() {
    this.flagUser2 = this.userService.nickValidation(this.user.username);
    if (!this.flagUser2) {
      this.userService.checkUser(this.user.username).subscribe({
        next: data => this.flagUser1 = !data,
        error: err => this.error = err
      });
    }

  }

  passValidation() {
    this.flagPass = this.userService.passValidation(this.user.password);
  }

  nickValidation() {
    this.flagNick2 = this.userService.nickValidation(this.user.nick);
    if (!this.flagNick2) {
      this.userService.checkNick(this.user.nick).subscribe({
        next: data => this.flagNick1 = !data,
        error: err => this.error = err
      });
    }
  }

  mailValidation() {
    if (this.user.mail.length > 8) {
      this.flagMail1 = this.userService.mailValidation(this.user.mail);
      if (!this.flagMail1) {
        this.userService.checkMail(this.user.mail).subscribe({
          next: data => this.flagMail2 = !data,
          error: err => this.error = err
        })
      }
    } else {
      this.flagMail1 = true;
    }
  }

  convalidateUser() {
    this.flag = !this.flagUser2 && !this.flagUser1 && !this.flagMail1 && !this.flagMail2 && !this.flagNick2 && !this.flagNick1 && !this.flagPass
      && this.user.username != undefined && this.user.password != undefined && this.user.mail != undefined && this.user.nick != undefined;
  }

  redirect() {
    this.router.navigate(['home', {esit: 'SignUp'}])
      .then(() => {
        window.location.reload();
      });
  }

}