import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/Utility/User/user.service';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { DeckImplService } from 'src/app/ServiceImpl/Card/Deck/deck-impl.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  constructor(public router: Router, public cardService: AllCardService,
    private userService: UserService, private deckService: DeckImplService,
    private route: ActivatedRoute) { }
  set: any;
  ngOnInit() {
    this.cardService.cardListDetails = [];
    if (this.cardService.view == null || this.cardService.view == undefined || this.cardService.view == '')
      this.cardService.changeView();
    this.cardService.changeUrl();

    this.set = this.route.snapshot.paramMap.get('set');
    this.cardService.changeUrl();
    if (this.cardService.isUserCard || this.cardService.isDeck) {
      if (!this.userService.isLogged()) {
        this.router.navigate(['/']);
      }
      if (this.cardService.isClassic) {
        this.cardService.getCardClassic();
      }
      if (this.cardService.isDetails) {
        this.cardService.getCardDetails();
      }
      if (this.cardService.isDeck) {
        this.deckService.getCardDeck(this.cardService.deckSelected.deck);
        this.deckService.getUserDeck();

      }
    } else {
      this.cardService.getCardAll();
    }
    

  }

  ngOnDestroy() {
  }

}
