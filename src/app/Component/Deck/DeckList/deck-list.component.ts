import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeckCard } from 'src/app/Model/DeckCard/deck-card.model';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { DeckImplService } from 'src/app/ServiceImpl/Card/Deck/deck-impl.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {

  constructor(public router: Router,public cardService : AllCardService,
    public deckService : DeckImplService) { }

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
    this.cardService.deckSelected = userDeck;
    this.router.navigate(['/Deck/Modify']);
  }

  cardList(userDeck : UserDeck){
    this.cardService.deckSelected = userDeck;
    this.router.navigate(['/Deck/CardList']);
  }
}
