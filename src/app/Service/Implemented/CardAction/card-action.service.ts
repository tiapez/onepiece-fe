import { Injectable } from '@angular/core';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { CardActionIntService } from 'src/app/Service/Interface/CardAction/card-action-int.service';
import { ToastService } from '../Toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CardActionService {

  constructor(private actionService: CardActionIntService, private toastService: ToastService) { }


  addClassic(card: CardDetailsDTO) {

    this.actionService.addCard(card.card.id).subscribe({
      next: () => { this.toastService.addSuccess() },
      error: () => this.toastService.addError(),
      complete: () => { card.qty = card.qty + 1 }
    });
  }

  removeClassic(card: CardDetailsDTO) {

    this.actionService.removeCard(card.card.id).subscribe({
      next: () => { this.toastService.removeSuccess() },
      error: () => this.toastService.removeError(),
      complete: () => { card.qty = card.qty - 1 }
    });
  }

  addDetails(card: CardDetailsDTO, details: DetailsDTO) {

    this.actionService.addCardDetails(card.card.id, details).subscribe({
      next: () => { this.toastService.addSuccess() },
      error: () => this.toastService.addError(),
      complete: () => { details.qty = details.qty + 1; card.qty = card.qty + 1; }
    });
  }

  removeDetails(card: CardDetailsDTO, details: DetailsDTO) {

    this.actionService.removeCardDetails(card.card.id, details).subscribe({
      next: () => { this.toastService.removeSuccess(); },
      error: () => this.toastService.removeError(),
      complete: () => { details.qty = details.qty - 1; card.qty = card.qty - 1; }
    });
  }

  getDetails(card: number, filter: Filter) {
    return this.actionService.getCardDetails(card, filter);
  }
}
