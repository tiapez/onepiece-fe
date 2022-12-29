import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { Card, CardAdapter } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO,  CardDetailsDTOAdapter } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { Deck } from 'src/app/Model/Deck/deck.model';

import { UserDeck, UserDeckAdapter } from 'src/app/Model/UserDeck/user-deck.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeckIntService {
  
  constructor(private http: HttpClient, private cookieService: CookieService,
    private userDeckAdapter : UserDeckAdapter,
    private cardAdapter : CardAdapter) { }

  url = environment.apiUrl;
  private baseUrl = this.url + "/api/deck/";



  getUserDeck(): Observable<UserDeck[]> {
    const url = `${this.baseUrl}userDecks`;
    let params = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
    return this.http.get<UserDeck[]>(url,{params}).pipe(
      map((data: UserDeck[]) => data.map((item) => this.userDeckAdapter.adapt(item)))
    );
  }



  saveUserDeck(deck : UserDeck) {
    const url = `${this.baseUrl}saveUserDeck`;
    return this.http.post(url,deck).pipe();
  }

  saveOnlyDeck(deck : Deck) {
    const url = `${this.baseUrl}saveOnlyDeck`;
    let params = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
    return this.http.post(url,deck,{params}).pipe();
  }

  getLeader() : Observable<Card[]> {
    const url = `${this.baseUrl}allLeader`;
    return this.http.get<Card[]>(url).pipe(
      map((data: Card[]) => data.map((item) => this.cardAdapter.adapt(item)))
    );
  }

}
