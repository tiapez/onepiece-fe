import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardActionService } from 'src/app/Service/Implemented/CardAction/card-action.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { GlobalService } from 'src/app/Service/global.service';


@Component({
  selector: 'app-card-list-text',
  templateUrl: './card-list-text.component.html',
  styleUrls: ['./card-list-text.component.css']
})
export class CardListTextComponent {
  constructor(public cardService : CardListService,public globalService : GlobalService,public cardAction : CardActionService) {}

  ngOnInit(): void {
    if(this.globalService.isUserCard)
    this.cardService.conta()
  }

}
