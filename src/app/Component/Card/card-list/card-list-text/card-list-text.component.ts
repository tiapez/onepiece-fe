import { Component } from '@angular/core';
import { CardActionService } from 'src/app/Service/Implemented/CardAction/card-action.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { GlobalService } from 'src/app/Service/global.service';
import { CardDetails } from 'src/app/Model/CardDetails/card-details.model';


@Component({
  selector: 'app-card-list-text',
  templateUrl: './card-list-text.component.html',
  styleUrls: ['./card-list-text.component.css']
})
export class CardListTextComponent {
  constructor(public cardService: CardListService, public globalService: GlobalService, public cardAction: CardActionService) { }

  ngOnInit(): void {
    if (this.globalService.isUserCard)
      this.cardService.conta()
  }

  display(cardDet: CardDetails): boolean {
    return cardDet.card.name.includes(this.cardService.filter.name) && (this.cardService.filter.rarity.includes('All') || cardDet.card.rarity.includes(this.cardService.filter.rarity))
      && (cardDet.card.setId.includes(this.cardService.filter.setId) || this.cardService.filter.setOption == 'Any')
      && (((this.globalService.isDetails) || (this.globalService.isClassic)) && (this.cardService.filter.view == 0 || (this.cardService.filter.view == 1 && cardDet.qty > 0) || (this.cardService.filter.view == 2 && cardDet.qty == 0)) ||
        (!this.globalService.isUserCard && (this.cardService.filter.color.includes('All') || cardDet.card.color.includes(this.cardService.filter.color)) && (this.cardService.filter.role.includes('All') || cardDet.card.role.includes(this.cardService.filter.role)) && (this.cardService.filter.cardType.includes('All') || cardDet.card.cardType.includes(this.cardService.filter.cardType)) && (cardDet.card.type.includes(this.cardService.filter.type))
          && (this.cardService.filter.power == -1 || cardDet.card.power == this.cardService.filter.power) && (this.cardService.filter.counter == -1 || cardDet.card.counter == this.cardService.filter.counter) && (this.cardService.filter.cost == -1 || cardDet.card.cost == this.cardService.filter.cost))
      );
  }

}
