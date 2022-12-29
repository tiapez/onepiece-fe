import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent {

  constructor(private router: Router,
    public deckService: DeckService) { }

  public deck: Deck = new Deck();
  public leader!: string;
  public name!: string;

  ngOnInit(): void {
    this.leader = this.deckService.deckSelected.leader.card.id + '/'
      + this.deckService.deckSelected.leader.card.color;
    if (this.router.url.includes('create'))
      this.name = 'create';
    else
      this.name = 'modify'
    this.deckService.getLeader();
    if (this.deckService.deckSelected != undefined)
      this.deck = this.deckService.deckSelected.deck;
  }

  ngOnDestroy(): void {
    this.deckService.deckSelected = new UserDeck();
  }

  changeLeader() {
    this.deck.leader = Number(this.leader.split('/')[0]);
    let color = this.leader.split('/')[1];
    if (color != undefined) {
      console.log(color);
      if (color.includes("-")) {
        this.deck.color1 = color.split("-")[0];
        this.deck.color2 = color.split("-")[1];
      } else {
        this.deck.color1 = color;
        this.deck.color2 = color;
      }
    }
  }

  saveDeck() {
    this.deckService.saveOnlyDeck(this.deck);
  }
}
