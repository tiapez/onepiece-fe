import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { DeckImplService } from 'src/app/ServiceImpl/Card/Deck/deck-impl.service';

@Component({
  selector: 'app-deck-modify',
  templateUrl: './deck-modify.component.html',
  styleUrls: ['./deck-modify.component.css']
})
export class DeckModifyComponent  {

  constructor(public cardService : AllCardService, public deckService : DeckImplService) { }

  closeDeck(){
    document.getElementById("deckbar")!.classList.add("deckClose");
    document.getElementById("deckbtn")!.innerHTML = "Show Deck";
  }


}
