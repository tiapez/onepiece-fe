import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { ModalCardAddComponent } from 'src/app/Component/Card/card-list/modal-card-add/modal-card-add.component';
import { ModalCardComponent } from 'src/app/Component/Card/card-list/modal-card-view/modal-card.component';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { UserCard, UserCardAdapter } from 'src/app/Model/UserCard/user-card.model';
import { CardServiceService } from 'src/app/Service/CardService/card-service.service';



@Injectable({
  providedIn: 'root'
})
export class CardServiceImplService {

  constructor(private cardService : CardServiceService
    ,private modalService: NgbModal, public router: Router){}
  public cardList : Card[] = [];


  ngOnInit(){

  }

  getUserCardClassic(set : string){
    return (this.cardService.getAllClassics(set));
  }

  getUserCardDetails(set : string){
    return (this.cardService.getAllDetails(set));
  }

  getCardList(){
    return (this.cardService.getAll());
 }

 getLeaderList(){
  return (this.cardService.getLeader());
}

  openView(card : Card) {
    const modalRef = this.modalService.open(ModalCardComponent,{centered: true});
    modalRef.componentInstance.modalCard = card;
  }

  openAdd(cardDet : CardDetailsDTO) {
    const modalRef = this.modalService.open(ModalCardAddComponent,{centered: true});
    modalRef.componentInstance.modalCard = cardDet;
  }


  





  


}
