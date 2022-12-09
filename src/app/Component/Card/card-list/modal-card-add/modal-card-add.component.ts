import { Component, Input } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import VanillaTilt from 'vanilla-tilt';
import { NgbActiveModal,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCard, UserCardAdapter } from 'src/app/Model/UserCard/user-card.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';

@Component({
  selector: 'app-modal-card-add',
  templateUrl: './modal-card-add.component.html',
  styleUrls: ['./modal-card-add.component.css']
})
export class ModalCardAddComponent {

  @Input() public modalCard! : CardDetailsDTO;
  public detailsList : UserCard[] = [];


  constructor(public activeModal: NgbActiveModal,public cardService : AllCardService) {
  }
  
  ngOnInit(){
  }
  
  ngAfterViewInit(): void {
    const elements:any = document.querySelector(".super-card");
    VanillaTilt.init(elements);
    const elements2:any = document.querySelector(".super-card-img");
    VanillaTilt.init(elements2,{glare:true,max:0});
  }

  add(card : CardDetailsDTO,details : DetailsDTO){
    this.cardService.addDetails(card,details);
  }

  remove(card : CardDetailsDTO,details : DetailsDTO){
    if(details.qty > 0)
    this.cardService.removeDetails(card,details);
  }

}
