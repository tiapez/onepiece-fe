import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/Utility/User/user.service';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public router: Router,public cardService : AllCardService,
    private userService: UserService,
    private route: ActivatedRoute) { }
    set : any; 
  ngOnInit(){
    if(this.cardService.view == null || this.cardService.view == undefined || this.cardService.view == '')
      this.cardService.changeView();
    this.set = this.route.snapshot.paramMap.get('set');
    if(this.set!= null)
    {
      this.cardService.changeFilter(this.set);
    }
      this.cardService.changeUrl();
      if (this.cardService.isDetails) {
        if (!this.userService.isLogged()) {
          this.router.navigate(['/'])
            .then(() => {
              window.location.reload();
            });     
        }
        this.cardService.getCardDetails();
      }
  
      if (this.cardService.isClassic) {
        if (!this.userService.isLogged()) {
          this.router.navigate(['/'])
            .then(() => {
              window.location.reload();
            });
        }
        this.cardService.getCardClassic();
      }
      if (!this.cardService.isUserCard)
        this.cardService.getCardAll();

  }

  ngOnDestroy() {
  }

}
