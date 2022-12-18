import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";

export class Card {
    constructor(
        public id:number,
        public number:string,
        public name:string,
        public color:string,
        public role:string,
        public rarity:string,
        public qty:number,
        public condition : string,
        public language : string,
        public cardType : string,
        public type : string,
        public power : number,
        public counter : number,
        public cost : number,
        public effect : string,
        public setId : string,
     ){}
}

@Injectable({
    providedIn: "root",
  })
  export class CardAdapter implements Adapter<Card> {
    adapt(item: any): Card {
      return new Card( item.id, 
        item.number, item.name,item.color,item.role,item.rarity,1,'All','All','All','All',0,0,0,item.string,item.setId);
    }
}
@Injectable({
  providedIn: "root",
})
export class CardAdapterFromDTO implements Adapter<Card> {
  adapt(item : any): Card {
    return new Card( item.card.id, 
      item.card.number, item.card.name,item.card.color,item.card.role,item.card.rarity,item.qty,'All','All','All','All',0,0,0,item.card.string,item.card.setId);
  }
}