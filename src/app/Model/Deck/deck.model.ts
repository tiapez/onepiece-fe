import { Injectable } from "@angular/core";
import { Adapter } from "src/app/Adapter/adapter";
import { Card } from "../Card/card.model";

export class Deck {
   public id! : number;
   public userId! : number;
   public leader! : Card;
   public cardList! : string;

   constructor(){}
}

@Injectable({
    providedIn: "root",
  })
  export class DeckAdapter implements Adapter<Deck> {
    adapt(item : any): Deck {
      let deck = new Deck();
        deck.id = item.id;
        deck.cardList = item.cardList;
        deck.leader = item.leader;
        deck.userId = item.userId;
      return deck;
    }
  }