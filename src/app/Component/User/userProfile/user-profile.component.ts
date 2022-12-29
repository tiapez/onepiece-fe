import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Model/User/user.model';
import { UserIntService } from 'src/app/Service/Interface/User/user-int.service';
import { CryptServiceImpl } from 'src/app/Service/Utility/CryptImpl/crypt-impl.service';
import { ToastService } from 'src/app/Service/Implemented/Toast/toast.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  public user!: User;
  selectedFile!: Blob;
  public esit!: any;


  constructor(private cryptService: CryptServiceImpl, private cookieService: CookieService,
    private userService: UserIntService, private router: Router
    , private toastService: ToastService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.esit = this.route.snapshot.paramMap.get('esit');
    if(this.esit == 'success'){
      this.toastService.userSaveSuccess();
    }
    if (!this.cryptService.isLogged())
      this.router.navigate(['/']);
    this.userService.getUser(this.cryptService.getCookieNick()).subscribe({
      next: data => { this.user = data; },
      complete: () => this.decodeUser()
    });
  }

  decodeUser() {
    this.user.username = this.cryptService.getCryptUser(this.user.username);
    this.user.nick = this.cryptService.getCryptNick(this.user.nick);
  }



  saveUserConfig() {
    this.userService.saveUserConfig(this.user, this.cryptService.setNickCrypt(this.user.nick)).subscribe({
      next: data => this.cookieService.set("navType", data),
      error: () => this.toastService.userSaveError(),
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
