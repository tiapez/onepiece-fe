import { Injectable } from "@angular/core";
import { Adapter } from "src/app/Adapter/adapter";

export class DetailsDTO {
    constructor(
        public id:number,
        public language:string,
        public condition:string,
        public codCondition : number,
        public qty:number,
        public userCardId:number
     ){}
}

@Injectable({
    providedIn: "root",
  })
  export class DetailsDTOAdapter implements Adapter<DetailsDTO> {
    adapt(item : DetailsDTO): DetailsDTO {
      return new DetailsDTO( item.id, item.language, item.condition,item.codCondition,item.qty,item.userCardId);
    }
  }

  @Injectable({
    providedIn: "root",
  })
  export class DetailsDTOAdapterFromDTO implements Adapter<DetailsDTO> {
    adapt(item : any): DetailsDTO {
      return new DetailsDTO( item.detailsDTO.id, item.detailsDTO.language, item.detailsDTO.condition,item.detailsDTO.codCondition,item.detailsDTO.qty,item.detailsDTO.userCardId);
    }
  }