import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptServiceImpl } from 'src/app/Service/Utility/CryptImpl/crypt-impl.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';
import { GlobalService } from 'src/app/Service/global.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {


  constructor(private router: Router, public globalService: GlobalService, public cardService: CardListService,
    private cryptService: CryptServiceImpl, private deckService: DeckService) { }
  ngOnInit() {
    this.cardService.cardListDetails = [];
    if (this.globalService.view == null || this.globalService.view == undefined || this.globalService.view == '') {
      this.globalService.changeView();
    }

    this.globalService.changeUrl();

    if (this.globalService.isUserCard || this.globalService.isDeck) {
      if (!this.cryptService.isLogged()) {
        this.router.navigate(['/']);
      }
      if (this.globalService.isClassic) {
        this.cardService.getCardClassic();
      }
      if (this.globalService.isDetails) {
        this.cardService.getCardDetails();
      }
      if (this.globalService.isDeck) {
        this.cardService.getCardDeck(this.deckService.deckSelected.deck);
        this.deckService.getUserDeck();
        this.cardService.filter.setOption='Any';
      }
    } else {
      this.cardService.filter.setOption='Any';
      this.cardService.getCardAll();
    }


  }

}
