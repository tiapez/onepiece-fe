import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";
import { Card } from "../Card/card.model";
import { Details, DetailsAdapter } from "../Details/details.model";

export class CardDetails {
  public card!: Card;
  public cardDetails!: Details[];
  public qty!: number;
  public qtyMax!: number;
  constructor() { }
}

@Injectable({
  providedIn: "root",
})
export class CardDetailsAdapter implements Adapter<CardDetails> {
  constructor(private detailsAdapter: DetailsAdapter) { }
  adapt(item: any): CardDetails {
    let detailsList: Details[];
    detailsList = item.detailsDTO.map((data: any) => this.detailsAdapter.adapt(data));
    let cd = new CardDetails();
    cd.card = item.card;
    cd.cardDetails = detailsList;
    cd.qty = 0;
    cd.qtyMax = item.qtyMax;
    return cd;
  }
}


@Injectable({
  providedIn: "root",
})
export class CardDetailsAdapterVoid implements Adapter<CardDetails> {
  adapt(item: Card): CardDetails {
    let cd = new CardDetails();
    cd.card = item;
    cd.cardDetails = [];
    cd.qty = 1;
    cd.qtyMax = 1;
    return cd;
  }
}

