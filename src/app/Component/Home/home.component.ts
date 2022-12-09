import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastServiceImpl } from 'src/app/ServiceImpl/Card/Toast/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public esit : any;
  constructor(private route: ActivatedRoute, private toastService: ToastServiceImpl) { }

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
