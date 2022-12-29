import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/Service/Implemented/Toast/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public esit : any;
  constructor(private route: ActivatedRoute, private toastService : ToastService) { }

  ngOnInit(): void {
    this.esit = this.route.snapshot.paramMap.get('esit');
    if(this.esit == 'success'){
      this.toastService.userSaveSuccess();
    }
    if(this.esit == 'SignIn'){
      this.toastService.userLogin();
    }
  }

}
