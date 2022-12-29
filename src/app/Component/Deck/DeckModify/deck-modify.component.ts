import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';

@Component({
  selector: 'app-deck-modify',
  templateUrl: './deck-modify.component.html',
  styleUrls: ['./deck-modify.component.css']
})
export class DeckModifyComponent  {

  constructor(private router: Router,public cardService : CardListService,
    public deckService : DeckService) { }

  ngOnInit(): void {
    if(this.deckService.deckSelected == undefined)
      this.router.navigate(["/Deck"]);
    console.log(this.deckService.deckSelected)
  }

  ngOnDestroy(): void {
    this.deckService.deckSelected = new UserDeck();
  }
  
  closeDeck(){
    document.getElementById("deckbar")!.classList.add("deckClose");
    document.getElementById("deckbtn")!.innerHTML = "Show Deck";
  }


}
