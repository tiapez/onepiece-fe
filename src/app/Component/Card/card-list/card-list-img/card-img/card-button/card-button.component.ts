import { Component, Input } from '@angular/core';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { CardActionService } from 'src/app/Service/Implemented/CardAction/card-action.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';
import { GlobalService } from 'src/app/Service/global.service';




@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent{
  @Input() cardDet!:CardDetailsDTO;

  constructor(public cardService : CardListService, public deckService : DeckService,public globalService : GlobalService, public cardAction : CardActionService) { }

}
