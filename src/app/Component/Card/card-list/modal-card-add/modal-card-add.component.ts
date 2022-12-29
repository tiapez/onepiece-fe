import { Component, Input } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';
import { CardActionService } from 'src/app/Service/Implemented/CardAction/card-action.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';

@Component({
  selector: 'app-modal-card-add',
  templateUrl: './modal-card-add.component.html',
  styleUrls: ['./modal-card-add.component.css']
})
export class ModalCardAddComponent {

  @Input() public modalCard! : CardDetailsDTO;


  constructor(public activeModal: NgbActiveModal,private cardAction : CardActionService,public cardService : CardListService) {
  }
  
  ngAfterViewInit() {
    const elements:any = document.querySelector(".super-card");
    VanillaTilt.init(elements);
    const elements2:any = document.querySelector(".super-card-img");
    VanillaTilt.init(elements2,{glare:true,max:0});
  }

  add(card : CardDetailsDTO,details : DetailsDTO){
    this.cardAction.addDetails(card,details);
  }

  remove(card : CardDetailsDTO,details : DetailsDTO){
    if(details.qty > 0)
    this.cardAction.removeDetails(card,details);
  }

}
