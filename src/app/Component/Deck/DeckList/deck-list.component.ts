import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeckCard } from 'src/app/Model/DeckCard/deck-card.model';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent{

  constructor(private router: Router,
    public deckService : DeckService) { }

  ngOnInit(): void {
    this.deckService.getUserDeck();
  }

  cardCounting(cardList : DeckCard[]){
    let owned = 0;
    let req = 0;
    cardList.forEach(card => {
      owned = owned + card.qtyOwned;
      req = req + card.qtyRequired;
    });
    return owned + "/" + req;
  }

  modify(userDeck : UserDeck) {
    this.deckService.deckSelected = userDeck;
    this.router.navigate(['/deck/modify']);
  }

  cardList(userDeck : UserDeck){
    this.deckService.deckSelected = userDeck;
    this.router.navigate(['/deck/cardList']);
  }
}
