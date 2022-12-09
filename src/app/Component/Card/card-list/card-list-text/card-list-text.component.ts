import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';


@Component({
  selector: 'app-card-list-text',
  templateUrl: './card-list-text.component.html',
  styleUrls: ['./card-list-text.component.css']
})
export class CardListTextComponent implements OnInit {
  constructor(public cardService : AllCardService,
    public router: Router) {}

  ngOnInit(): void {
    if(this.cardService.isUserCard)
    this.cardService.conta()
  }
  
  ngAfterViewInit(){
    console.log(this.cardService.cardListDetails);
  }

}
