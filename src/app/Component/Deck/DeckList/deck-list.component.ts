import { Component, OnInit } from '@angular/core';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DeckCard } from 'src/app/Model/DeckCard/deck-card.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { DeckImplService } from 'src/app/ServiceImpl/Card/Deck/deck-impl.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {

  constructor(public cardService : AllCardService,
    public deckService : DeckImplService) { }

  ngOnInit(): void {
    this.deckService.getUserDeck();
  }

  cardCounting(cardList : DeckCard[]){
    console.log(this.cardService.userDeck);
    let owned = 0;
    let req = 0;
    cardList.forEach(card => {
      owned = owned + card.qtyOwned;
      req = req + card.qtyRequired;
    });
    return owned + "/" + req;
  }
}
