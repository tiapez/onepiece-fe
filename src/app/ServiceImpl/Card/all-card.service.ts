import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { CardActionServiceImpl } from './CardAction/card-action.service';
import { CardServiceImplService } from './CardList/card-service-impl.service';
import * as g from '../../Component/Global/global';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AllCardService {

  constructor(private cardService: CardServiceImplService,
    private CardAction: CardActionServiceImpl,
    public router: Router, public cookieService : CookieService) { }

  public cardListDetails: CardDetailsDTO[] = [];

  //FILTRI
  public isClassic: boolean = false;
  public isDetails: boolean = false;
  public isUserCard: boolean = false;
  public view: string = this.cookieService.get("view");
  public filter: Filter = new Filter();

  changeUrl() {
    this.isClassic = false;
    this.isDetails = false;
    this.isUserCard = false;
    if (this.router.url.includes('UserCard'))
      this.isUserCard = true;
    if (this.router.url.includes('Classic'))
      this.isClassic = true;
    if (this.router.url.includes('Details'))
      this.isDetails = true;
  }

  changeView() {
if(this.view == '0'){
  this.cookieService.set("view","1");
  this.view = '1';
}else{
  this.cookieService.set("view","0");
  this.view = '0';
}
  }

  changeFilter(){
    this.filter.setName = this.filter.setOption.split('/')[1];
    this.filter.setId = this.filter.setOption.split('/')[0];
    this.getCardClassic();
    
  }

  conta() {
    let c: number = 0;
    this.cardListDetails.forEach((cardDet: CardDetailsDTO) => {
      cardDet.cardDetails.forEach((dto: DetailsDTO) => {
        if ((this.filter.condition == 0 || this.filter.condition >= dto.codCondition) && (this.filter.language.includes('All') || dto.language.includes(this.filter.language))) {
          c = c + dto.qty;
        }
      })
      cardDet.qty = c;
      c = 0;
    });
  }

  //CARD LIST SERVICE

  getCardDetails() {
    
    this.cardService.getUserCardDetails(this.filter.setId).subscribe({
      next : data => { this.cardListDetails = data },
      complete : () => this.conta()
    }
    )
  }

  getCardClassic() {
    this.cardService.getUserCardClassic(this.filter.setId).subscribe(
      {
        next : data => { this.cardListDetails = data },
        complete : () => this.conta()
      }
    )
  }

  getCardAll() {
    this.cardService.getCardList().subscribe({
      next : data => { this.cardListDetails = data }
    }
    )
  }

  //CARD ACTION

  addClassic(card: CardDetailsDTO) {
    this.CardAction.addClassic(card);
  }

  removeClassic(card: CardDetailsDTO) {
    this.CardAction.removeClassic(card);
  }

  addDetails(card : CardDetailsDTO,details : DetailsDTO) {
    this.CardAction.addDetails(card,details);
  }

  removeDetails(card : CardDetailsDTO,details : DetailsDTO) {
    this.CardAction.removeDetails(card,details);
  }

  getDetails(card: number) {
    return this.CardAction.getDetails(card, this.filter);
  }

  openView(card: Card) {
    this.cardService.openView(card);
  }

  openAdd(cardDet: CardDetailsDTO) {
    this.cardService.openAdd(cardDet);
  }

}
