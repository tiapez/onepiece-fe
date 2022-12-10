import { Component,ElementRef,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';



@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent {

  constructor(public router: Router,public cardService : AllCardService,private elementRef: ElementRef){}
  @Input() card!:Card;
  @Input() cardDet!:CardDetailsDTO;


  ngOnInit(){
  }

ngAfterViewInit(){
  console.log(this.cardService.cardListDetails)
}

ngOnDestroy() {
  this.elementRef.nativeElement.remove();
}
}


// <div id="{{'card-container-'+card.id}}"
//     class="{{  card.qty <= 0 ? 'grey-img card-bg card-' + card.color : 'card-bg card-' + card.color}}{{card.name.includes('Full') ? ' shine' : ''}}">
//     <div class="{{'card-container card-' + card.role}}">
//         <img id="{{'img-card-'+card.id}}" class="{{card.qty == 0 ? 'grey-img' : ''}}"
//             src="./assets/Img/1/{{card.number}}.png" width="360" 
//             (click)="!cardService.isUserCard ? cardService.openView(card) : ''" />

//         <app-card-button *ngIf="cardService.isUserCard" [card]="card"></app-card-button>

//     </div>
// </div>