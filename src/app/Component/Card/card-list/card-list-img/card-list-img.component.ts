import { Component } from '@angular/core';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { GlobalService } from 'src/app/Service/global.service';

@Component({
  selector: 'app-card-list-img',
  templateUrl: './card-list-img.component.html',
  styleUrls: ['./card-list-img.component.css']
})
export class CardListImgComponent {
  constructor( public cardService: CardListService,public globalService : GlobalService) { }

}


// <div class="container-lg card-list-container-img card-list-none" id="card-list-img">
// 	<div class="card-div" *ngFor="let card of cardService.cardListDetails" >
// 		<div class="card-box" *ngIf=" card.name.includes(cardService.filter.name) && (cardService.filter.rarity.includes('All') || card.rarity.includes(cardService.filter.rarity)) && (
// 		(cardService.isDetails && (cardService.filter.condition.includes('All') || card.condition.includes(cardService.filter.condition)) && (cardService.filter.language.includes('All') || card.language.includes(cardService.filter.language))) ||
// 		(cardService.isClassic && (cardService.filter.view == 0 || (cardService.filter.view == 1 && card.qty >0) || (cardService.filter.view == 2 && card.qty ==0))) ||
// 		(!cardService.isUserCard  && (cardService.filter.color.includes('All') || card.color.includes(cardService.filter.color)) && (cardService.filter.role.includes('All') || card.role.includes(cardService.filter.role)) && (cardService.filter.type.includes('All') || card.type.includes(cardService.filter.type)) && (card.subType.includes(cardService.filter.subType)) && (cardService.filter.condition.includes('All') || card.condition.includes(cardService.filter.condition)) && (cardService.filter.power == -1 || card.power == cardService.filter.power) && (cardService.filter.counter == -1 || card.counter == cardService.filter.counter) && (cardService.filter.cost == -1 || card.cost == cardService.filter.cost))
// 		)">
// 		<app-card-img [card]="card"
// 		></app-card-img>
// 	</div>
// 	</div>
// </div>