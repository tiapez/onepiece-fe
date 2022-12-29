import { Injectable } from "@angular/core";
import { Adapter } from "src/app/Adapter/adapter";

export class Details {
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
  export class DetailsAdapter implements Adapter<Details> {
    adapt(item : Details): Details {
      return new Details( item.id, item.language, item.condition,item.codCondition,item.qty,item.userCardId);
    }
  }

  @Injectable({
    providedIn: "root",
  })
  export class DetailsAdapterFromDTO implements Adapter<Details> {
    adapt(item : any): Details {
      return new Details( item.details.id, item.details.language, item.details.condition,item.details.codCondition,item.details.qty,item.details.userCardId);
    }
  }