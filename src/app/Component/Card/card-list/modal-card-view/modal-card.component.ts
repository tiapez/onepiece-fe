import { Component, Input } from '@angular/core';
import { Card } from 'src/app/Model/Card/card.model';
import VanillaTilt from 'vanilla-tilt';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.css']
})
export class ModalCardComponent {
@Input() public modalCard! : Card;
@Input() public modalSet! : string;

constructor(public activeModal: NgbActiveModal) {
}


ngAfterViewInit(): void {
  const elements:any = document.querySelector(".super-card");
  VanillaTilt.init(elements);
  if(this.modalCard.name.includes("Parallel") || this.modalCard.rarity.includes("Secret")){
    const elements2:any = document.querySelector(".super-card-img");
    VanillaTilt.init(elements2,{glare:true,max:0});
  }

}
}
