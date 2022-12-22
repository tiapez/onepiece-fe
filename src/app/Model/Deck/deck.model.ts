import { Injectable } from "@angular/core";
import { Adapter } from "src/app/Adapter/adapter";
import { Card } from "../Card/card.model";

export class Deck {
  public id!: number;
  public userId!: number;
  public leader!: number;
  public cardList!: string;
  public name!: string;
  public color!: string;
  public deck!: string;
  public desc!: string;
  public counter!: string;
  public side!: string;
  public note!: string;
  public format!: string;
  public cond!: number;
  constructor() { }
}

@Injectable({
  providedIn: "root",
})
export class DeckAdapter implements Adapter<Deck> {
  adapt(item: any): Deck {
    let deck = new Deck();
    deck.id = item.id;
    deck.cardList = item.cardList;
    deck.leader = item.leader;
    deck.userId = item.userId;
    deck.name = item.name;
    deck.color = item.color;
    deck.deck = item.deck;
    deck.desc = item.desc;
    deck.counter = item.counter;
    deck.side = item.side;
    deck.format = item.format;
    deck.note = item.note;
    deck.cond = item.cond;
    return deck;
  }
}