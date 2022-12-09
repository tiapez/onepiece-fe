import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';




@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {
  @Input() card!:Card;
  @Input() cardDet!:CardDetailsDTO;

  constructor(public cardService : AllCardService,
    public router: Router) { }

  ngOnInit(): void {


  }
}
