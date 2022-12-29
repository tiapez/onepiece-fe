import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";
import { Card } from "../Card/card.model";
import { Details, DetailsAdapter } from "../Details/details.model";

export class CardDetails {

    constructor(
        public card:Card,
        public cardDetails : Details[],
        public qty:number,
     ){}
}

@Injectable({
    providedIn: "root",
  })
  export class CardDetailsAdapter implements Adapter<CardDetails> {
    constructor(private detailsAdapter : DetailsAdapter){}
    adapt(item: any): CardDetails {
      let detailsList : Details[];
      detailsList = item.detailsDTO.map((data : any) => this.detailsAdapter.adapt(data));
      return new CardDetails( item.card,detailsList,0);
    }
}


@Injectable({
  providedIn: "root",
})
export class CardDetailsAdapterVoid implements Adapter<CardDetails> {
  adapt(item: any): CardDetails {
    return new CardDetails( item.card,[],1);
  }
}