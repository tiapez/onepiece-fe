import { Component,Input } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { GlobalService } from 'src/app/Service/global.service';



@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent {

  constructor(public cardService : CardListService,public globalService : GlobalService){}
  @Input() cardDet!:CardDetailsDTO;

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