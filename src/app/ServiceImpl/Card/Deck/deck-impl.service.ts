import { Injectable } from '@angular/core';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { DeckCard } from 'src/app/Model/DeckCard/deck-card.model';
import { DeckService } from 'src/app/Service/DeckService/deck.service';
import { AllCardService } from '../all-card.service';

@Injectable({
  providedIn: 'root'
})
export class DeckImplService {

  constructor(public deckService: DeckService, public cardService: AllCardService) { }

  getUserDeck() {
    this.deckService.getUserDeck().subscribe(
      {
        next: data => { this.cardService.deckList = data },
      }
    )
  }

  getCardDeck(deck: Deck) {
    this.deckService.getDeckCard(deck).subscribe(
      {
        next: data => { this.cardService.cardListDetails = data },
        complete: () => this.cardService.conta()
      }
    )
  }

  add(card: DeckCard) {
    card.qtyRequired = card.qtyRequired + 1;
    if (card.qtyRequired > 4)
      card.qtyRequired = 4;
  }

  remove(card: DeckCard) {
    card.qtyRequired = card.qtyRequired - 1;
    if (card.qtyRequired <= 0) {
      this.cardService.deckSelected.cardList.forEach((card2, index) => {
        if (card == card2) {
          this.cardService.deckSelected.cardList.splice(index, 1);
        }
      });
    }
  }

  create(card: CardDetailsDTO) {
    let flag = true;
    this.cardService.deckSelected.cardList.forEach(card2 => {
      if (card.card.id == card2.card.id) {
        this.add(card2);
        flag = false;
      }
    })

    if(flag){
      let deckCard = new DeckCard();
      deckCard.card = card.card;
      deckCard.qtyRequired = 1;
      deckCard.qtyOwned = card.qty;
      this.cardService.deckSelected.cardList.push(deckCard);
    }
  }

  removeDet(card: CardDetailsDTO) {
    this.cardService.deckSelected.cardList.forEach(card2 => {
      if (card.card.id == card2.card.id) {
        this.remove(card2);
      }
    })
  }

  saveUserDeck(){
    this.deckService.saveUserDeck(this.cardService.deckSelected).subscribe({
      error : err => console.log(err)
    });
  }

  saveOnlyDeck(deck : Deck){
    this.deckService.saveOnlyDeck(deck).subscribe({
      error : err => console.log(err)
    });
  }

}
