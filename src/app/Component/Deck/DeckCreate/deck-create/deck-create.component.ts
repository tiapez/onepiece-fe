import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Model/Card/card.model';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { UserDeck } from 'src/app/Model/UserDeck/user-deck.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { DeckImplService } from 'src/app/ServiceImpl/Card/Deck/deck-impl.service';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {

  constructor(public router: Router,public cardService : AllCardService,
    public deckService : DeckImplService) { }
    public deck : Deck = new Deck();
    public leader! : string;
    public name! : string;

  ngOnInit(): void {
    if(this.router.url.includes('Create'))
      this.name = 'Create';
    else
      this.name = 'Modify'
    this.cardService.getLeader();
    if(this.cardService.deckSelected != undefined)
      this.deck = this.cardService.deckSelected.deck;
  }

  ngOnDestroy(): void {
    this.cardService.deckSelected = new UserDeck();
  }

  changeLeader(){
    this.deck.leader =  Number(this.leader.split('/')[0]);
    let color = this.leader.split('/')[1];
    if(color != undefined){
      console.log(color);
    if(color.includes("-")){
      this.deck.color1 = color.split("-")[0];
      this.deck.color2 = color.split("-")[1];
    }else{
      this.deck.color1 = color;
      this.deck.color2 = color;
    }}else{
    }
  }

  saveDeck(){
    this.deckService.saveOnlyDeck(this.deck);
  }
}
