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

}
