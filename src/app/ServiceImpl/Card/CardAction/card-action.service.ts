import { Injectable } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { CardActionService } from 'src/app/Service/CardAction/card-action.service';
import { AllCardService } from '../all-card.service';
import { ToastServiceImpl } from '../Toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CardActionServiceImpl {

  constructor(private actionService : CardActionService, private toastService : ToastServiceImpl) { }

  
  addClassic(card : CardDetailsDTO){

     this.actionService.addCard(card.card.id).subscribe({
       next: data => {this.toastService.addSuccess()},
      error: err => this.toastService.addError(),
      complete : () => {card.qty= card.qty + 1}
      });
  }

  removeClassic(card : CardDetailsDTO){

     this.actionService.removeCard(card.card.id).subscribe({
       next: data => {this.toastService.removeSuccess()},
      error: err => this.toastService.removeError(),
      complete : () => {card.qty= card.qty - 1}
      });
  }

  addDetails(card : CardDetailsDTO,details : DetailsDTO){

     this.actionService.addCardDetails(card.card.id,details).subscribe({
       next: data => {this.toastService.addSuccess()},
      error: err => this.toastService.addError(),
      complete : () => {details.qty = details.qty +1;card.qty = card.qty + 1;}
      });
  }

  removeDetails(card : CardDetailsDTO,details : DetailsDTO){

     this.actionService.removeCardDetails(card.card.id,details).subscribe({
       next: data =>  {this.toastService.removeSuccess();},
      error: err => this.toastService.removeError(),
      complete: () =>{details.qty = details.qty -1;card.qty = card.qty - 1;}
      });
  }

  getDetails(card : number,filter : Filter){
    return this.actionService.getCardDetails(card,filter);
   }
}
