import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptServiceImpl } from 'src/app/Service/Utility/CryptImpl/crypt-impl.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';
import { GlobalService } from 'src/app/Service/global.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {


  constructor(private router: Router, public globalService: GlobalService, public cardService: CardListService,
    private deckService: DeckService,private titleService:Title) { }
  ngOnInit() {
    this.cardService.cardListDetails = [];
    if (this.globalService.view == null || this.globalService.view == undefined || this.globalService.view == '') {
      this.globalService.changeView();
    }

    this.globalService.changeUrl();

    if (this.globalService.isUserCard || this.globalService.isDeck) {
      if (!this.globalService.isLogged()) {
        this.router.navigate(['/']);
      }
      if (this.globalService.isClassic) {
        this.cardService.getCardClassic();
        this.titleService.setTitle("Onepiece TCG - Classic")
      }
      if (this.globalService.isDetails) {
        this.cardService.getCardDetails();
        this.titleService.setTitle("Onepiece TCG - Details")
      }
      if (this.globalService.isDeck) {
        this.cardService.getCardDeck(this.deckService.deckSelected.deck);
        this.deckService.getUserDeck();
        this.cardService.filter.setOption='Any';
        this.titleService.setTitle("Onepiece TCG - DeckCard")
      }
    } else {
      this.cardService.filter.setOption='Any';
      this.cardService.getCardAll();
      this.titleService.setTitle("Onepiece TCG - Card List")
    }


  }

}
