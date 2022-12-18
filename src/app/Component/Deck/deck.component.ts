import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { DeckService } from 'src/app/Service/DeckService/deck.service';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor(public cardService : AllCardService, public deckService : DeckService) { }
  card : Card = new Card(1,'025','roronoa zoro','Red','','',1,'','','','',1,1,1,'','OP01');
  carddet : CardDetailsDTO = new CardDetailsDTO(this.card,[],1);
  userDecks! : UserDeck[];
  userDeck : UserDeck = new UserDeck();
  ngOnInit(): void {
    this.deckService.getUserDeck().subscribe(
      {
        next : data => { this.userDecks = data },
        complete : () => {this.userDeck = this.userDecks[0]; console.log(this.userDeck)}
      }
    )
  }

}
