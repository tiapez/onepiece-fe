import { Injectable } from "@angular/core";
import { Adapter } from "../../Adapter/adapter";
import { Card } from "../Card/card.model";
import { DetailsDTO, DetailsDTOAdapter } from "../DetailsDTO/details-dto.model";

export class CardDetailsDTO {

    constructor(
        public card:Card,
        public cardDetails : DetailsDTO[],
        public qty:number,
     ){}
}

@Injectable({
    providedIn: "root",
  })
  export class CardDetailsDTOAdapter implements Adapter<CardDetailsDTO> {
    constructor(private detailsDTOAdapter : DetailsDTOAdapter){}
    adapt(item: any): CardDetailsDTO {
      let detailsList : DetailsDTO[];
      detailsList = item.detailsDTO.map((data : any) => this.detailsDTOAdapter.adapt(data));
      return new CardDetailsDTO( item.card,detailsList,0);
    }
}


@Injectable({
  providedIn: "root",
})
export class CardDetailsDTOAllAdapter implements Adapter<CardDetailsDTO> {
  constructor(private detailsDTOAdapter : DetailsDTOAdapter){}
  adapt(item: any): CardDetailsDTO {
    return new CardDetailsDTO( item.card,[],1);
  }
}