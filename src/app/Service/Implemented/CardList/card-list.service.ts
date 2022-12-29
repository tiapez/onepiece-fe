import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCardAddComponent } from 'src/app/Component/Card/card-list/modal-card-add/modal-card-add.component';
import { ModalCardComponent } from 'src/app/Component/Card/card-list/modal-card-view/modal-card.component';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetails } from 'src/app/Model/CardDetails/card-details.model';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { Details } from 'src/app/Model/Details/details.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { CardListIntService } from 'src/app/Service/Interface/CardList/card-list-int.service';



@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private cardListIntService : CardListIntService
    ,private modalService: NgbModal, public router: Router){}
  public cardListDetails: CardDetails[] = [];
  public filter: Filter = new Filter();

  getCardDetails() {

    this.cardListIntService.getAllDetails(this.filter.setId).subscribe({
      next: data => { this.cardListDetails = data },
      complete: () => this.conta()
    }
    )
  }

  getCardClassic() {
    this.cardListIntService.getAllClassic(this.filter.setId).subscribe(
      {
        next: data => { this.cardListDetails = data },
        complete: () => this.conta()
      }
    )
  }

  getCardAll() {
    this.cardListIntService.getAll().subscribe({
      next: data => { this.cardListDetails = data }
    }
    )
  }

  
  getCardDeck(deck: Deck) {
    this.cardListIntService.getDeckCard(deck).subscribe(
      {
        next: data => { this.cardListDetails = data },
        complete: () => this.conta()
      }
    )
  }

  openView(card : Card) {
    const modalRef = this.modalService.open(ModalCardComponent,{centered: true});
    modalRef.componentInstance.modalCard = card;
  }

  openAdd(cardDet : CardDetails) {
    const modalRef = this.modalService.open(ModalCardAddComponent,{centered: true});
    modalRef.componentInstance.modalCard = cardDet;
  }

  conta() {
    let c: number = 0;
    this.cardListDetails.forEach((cardDet: CardDetails) => {
      cardDet.cardDetails.forEach((dto: Details) => {
        if ((this.filter.condition == 0 || this.filter.condition >= dto.codCondition) && (this.filter.language.includes('All') || dto.language.includes(this.filter.language))) {
          c = c + dto.qty;
        }
      })
      cardDet.qty = c;
      c = 0;
    });
  }
  


  changeFilter() {
    this.filter.setName = this.filter.setOption.split('/')[1];
    this.filter.setId = this.filter.setOption.split('/')[0];
    this.cardListDetails = [];
  }



  


}
