import { Component} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { DeckService } from 'src/app/Service/Implemented/Deck/deck.service';
import { CardListService } from 'src/app/Service/Implemented/CardList/card-list.service';
import { GlobalService } from 'src/app/Service/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private deviceService: DeviceDetectorService, public cardService: CardListService, private deckService : DeckService, public globalService: GlobalService,private router : Router) { }

  isMobile: boolean = this.deviceService.isMobile();
  filterHeight: string | undefined;
  filterWidth: string | undefined;
  isCollapsed: boolean = true;

  ngOnInit() {
    if (this.isMobile) {
      this.filterWidth = "100%";
    }
  }

  openFilter() {
    if (this.isMobile) {
      this.filterWidth = "100%";
      this.isCollapsed = false;
    }
    else{
      this.isCollapsed = !this.isCollapsed;   
      this.startTimer();
    }  
  }

  closeFilter() {
    this.filterWidth = "0";
  }

  reset() {
    this.cardService.filter = new Filter();
  }


  conta() {
    this.cardService.conta();
  }

  ngAfterViewInit(){
    if(!this.isMobile){
      this.deckService.deckListMargin = document.getElementById('navbar')?.clientHeight; 
      this.deckService.deckListHeight = window.innerHeight - this.deckService.deckListMargin;
    }
  }

  interval: any;

  startTimer() {
    let time = 5000;
      this.interval = setInterval(() => {
        if(time > 0) {
          time--;
          this.deckService.deckListMargin = document.getElementById('navbar')?.clientHeight; 
          this.deckService.deckListHeight = window.innerHeight - this.deckService.deckListMargin;
        } else {
          clearInterval(this.interval);
        }
      },1)
    }

    openDeck(){
      if(document.getElementById("deckbar")!.classList.contains("deckClose")){
        document.getElementById("deckbar")!.classList.remove("deckClose");
        document.getElementById("deckbtn")!.innerHTML = "Close Deck";
      }else{
        document.getElementById("deckbar")!.classList.add("deckClose");
        document.getElementById("deckbtn")!.innerHTML = "Show Deck";
      }

    }

    back(){
      console.log(this.router.url);
    }
}
