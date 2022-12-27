import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";

export class Card {

  public id!:number;
  public number!:string;
  public name!:string;
  public color!:string;
  public role!:string;
  public rarity!:string;
  public qty!:number;
  public condition !: string;
  public language !: string;
  public cardType !: string;
  public type !: string;
  public power !: number;
  public counter !: number;
  public cost !: number;
  public effect !: string;
  public setId !: string;
  constructor(){}
}

@Injectable({
    providedIn: "root",
  })
  export class CardAdapter implements Adapter<Card> {
    adapt(item: Card) : Card {
      let card = new Card( );
        card.id = item.id; 
        card.number = item.number; 
        card.name = item.name;
        card.color = item.color;
        card.role = item.role;
        card.rarity = item.rarity;
        card.effect = item.effect;
        card.setId = item.setId;
        card.cost = item.cost;
        card.counter = item.counter;
        card.power = item.power;
        card.cardType = item.cardType;
        card.type = item.type;
        return card;
      }
}
@Injectable({
  providedIn: "root",
})
export class CardAdapterFromDTO implements Adapter<Card> {
  adapt(item : Card) : Card {
    let card = new Card( );
    card.id = item.id; 
    card.number = item.number; 
    card.name = item.name;
    card.color = item.color;
    card.role = item.role;
    card.rarity = item.rarity;
    card.effect = item.effect;
    card.setId = item.setId;
    card.cost = item.cost;
    card.counter = item.counter;
    card.power = item.power;
    card.cardType = item.cardType;
    card.type = item.type;
    card.qty = item.qty;
    card.condition = item.condition;
    card.language = item.language;
    return card;
  }
  }
