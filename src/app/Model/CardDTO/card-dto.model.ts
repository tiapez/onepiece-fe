import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";
import { Card } from "../Card/card.model";

export class CardDTO {

    constructor(
        public card:Card,
        public qty:number,
     ){}
}

@Injectable({
    providedIn: "root",
  })
  export class CardDTOAdapter implements Adapter<CardDTO> {
    adapt(item: CardDTO): CardDTO {
      return new CardDTO( item.card,item.qty);
    }
}