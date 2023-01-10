import { Component, OnInit } from '@angular/core';
import { SetCard } from 'src/app/Model/SetCard/set-card.model';
import { GlobalService } from 'src/app/Service/global.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {

  constructor(public globalService: GlobalService, public cardService: CardListService) { }

  setCardList: SetCard[] = [];
  ngOnInit(): void {
    this.cardService.getCardAll2().subscribe({
      next: data => { this.setCardList = data }
    });

    this.cardService.filter.setOption = "Any/Any";
    this.cardService.changeFilter();
    this.globalService.isCardList = true;
  }

}
