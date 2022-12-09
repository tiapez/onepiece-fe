import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

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


  ngOnInit() {
    if (this.isMobile) {
      this.filterWidth = "100%";
    }
  }

  filterStuff() {
    if (this.isMobile) {
      this.openFilter();
    } else {
      if (this.filterHeight == "8em") {
        this.filterHeight = "0";
      } else {
        this.filterHeight = "8em";
      }
    }
  }

  openFilter() {
    if (this.isMobile) {
      this.filterWidth = "100%";
      this.isCollapsed = false;
    }

    else
      this.isCollapsed = !this.isCollapsed;
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

  callCard() {
    if (this.cardService.isClassic)
      this.cardService.getCardClassic();
    if (this.cardService.isDetails)
      this.cardService.getCardDetails();
  }

}
