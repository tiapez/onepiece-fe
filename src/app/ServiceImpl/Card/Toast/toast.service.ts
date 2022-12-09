import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/Service/Toast/toast.service';
import { UserService } from 'src/app/Service/Utility/User/user.service';


@Injectable({
  providedIn: 'root'
})
export class ToastServiceImpl {

  constructor(public toastService: ToastService, public userService: UserService) { }
  
  addSuccess(){
    this.toastService.show('Card Added Succesfully', { classname: 'bg-success text-light', delay: 3000 });
  }

  addError(){
    this.toastService.show('Error Adding Card', { classname: 'bg-danger text-light', delay: 3000 });
  }

  removeSuccess(){
    this.toastService.show('Card Removed Succesfully', { classname: 'bg-success text-light', delay: 3000 });
  }

  removeError(){
    this.toastService.show('Error Removing Card', { classname: 'bg-danger text-light', delay: 3000 });
  }

  userSaveError(){
    this.toastService.show('Error Saving User', { classname: 'bg-danger text-light', delay: 3000 });
  }

  userSaveSuccess(){
    this.toastService.show('user Created', { classname: 'bg-success text-light', delay: 3000 });
  }

  userNotValid(){
    this.toastService.show('User Not Valid', { classname: 'bg-danger text-light', delay: 3000 });
  }

  userLogin(){
    this.toastService.show('Welcome Back, '+ this.loginName() + '!!', { classname: 'bg-success text-light', delay: 3000 });
  }

  loginName(){
    let nick = this.userService.getCookieNick();
    nick = nick[0].toUpperCase() + nick.slice(1);
    return nick;
  }
}
