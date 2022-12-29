import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router, private cookieService: CookieService,
    private deviceService: DeviceDetectorService,) { }

  //FILTRI
  public isCardList: boolean = false;
  public isClassic: boolean = false;
  public isDetails: boolean = false;
  public isUserCard: boolean = false;
  public isDeck: boolean = false;
  public view: string = this.cookieService.get("view");
  public isMobile: boolean = this.deviceService.isMobile();

  changeUrl() {
    this.isClassic = false;
    this.isDetails = false;
    this.isUserCard = false;
    this.isCardList = false;
    this.isDeck = false;
    
    if (this.router.url.includes('userCard')) {
      this.isCardList = true;
      this.isUserCard = true;
    }

    if (this.router.url.includes('userCard/classic')) {
      this.isCardList = true;
      this.isClassic = true;
    }

    if (this.router.url.includes('userCard/details')) {
      this.isCardList = true;
      this.isDetails = true;
    }

    if (this.router.url.includes('deck/cardList')) {
      this.isCardList = true;
      this.isDeck = true;
    }

    if (this.router.url.includes('cardList')) {
      this.isCardList = true;
    }
  }

  changeView() {
    if (this.view == '0') {
      this.cookieService.set("view", "1");
      this.view = '1';
    } else {
      this.cookieService.set("view", "0");
      this.view = '0';
    }
  }

}
