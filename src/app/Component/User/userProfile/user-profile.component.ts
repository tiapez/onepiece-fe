import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Model/User/user.model';
import { SignServiceService } from 'src/app/Service/SignService/sign-service.service';
import { UserService } from 'src/app/Service/Utility/User/user.service';
import { ToastServiceImpl } from 'src/app/ServiceImpl/Card/Toast/toast.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  public user!: User;
  selectedFile!: Blob;
  public esit!: any;


  constructor(private userService: UserService, private cookieService: CookieService,
    private signService: SignServiceService, private router: Router
    , private toastService: ToastServiceImpl, private route: ActivatedRoute) { }


  ngOnInit() {
    this.esit = this.route.snapshot.paramMap.get('esit');
    if(this.esit == 'success'){
      this.toastService.userSaveSuccess();
    }
    if (!this.userService.isLogged())
      this.router.navigate(['/']);
    this.signService.getUser(this.userService.getCookieNick()).subscribe({
      next: data => { this.user = data; },
      complete: () => this.decodeUser()
    });
  }

  decodeUser() {
    this.user.username = this.userService.getCryptUser(this.user.username);
    this.user.nick = this.userService.getCryptNick(this.user.nick);
  }



  saveUserConfig() {
    this.signService.saveUserConfig(this.user, this.userService.setNickCrypt(this.user.nick)).subscribe({
      next: data => this.cookieService.set("navType", data),
      error: err => this.toastService.userSaveError(),
      complete: () => { this.redirect() }
    });
  }

  imageChange(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String: string = (reader.result as string).replace('data:', '').replace(/^.+,/, '');
      this.user.image = base64String as unknown as Blob;
    };
  }

  redirect() {
    this.router.navigate(['UserProfile', { esit: 'success' }])
      .then(() => {
        window.location.reload();
      });
  }

}
