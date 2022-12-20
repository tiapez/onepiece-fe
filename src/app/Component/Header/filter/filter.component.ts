import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'src/app/Component/Global/global';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private deviceService: DeviceDetectorService, public cardService: AllCardService) { }

  isMobile: boolean = this.deviceService.isMobile();
  filterHeight: string | undefined;
  filterWidth: string | undefined;
  isCollapsed: boolean = true;
  filter = filter;

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
      this.cardService.deckListMargin = document.getElementById('navbar')?.clientHeight; 
      this.cardService.deckListHeight = window.innerHeight - this.cardService.deckListMargin;
    }
  }

  interval: any;

  startTimer() {
    let time = 5000;
      this.interval = setInterval(() => {
        if(time > 0) {
          time--;
          this.cardService.deckListMargin = document.getElementById('navbar')?.clientHeight; 
          this.cardService.deckListHeight = window.innerHeight - this.cardService.deckListMargin;
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
}
