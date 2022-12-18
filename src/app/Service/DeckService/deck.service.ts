import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { CardAdapter, CardAdapterFromDTO } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO,  CardDetailsDTOAllAdapter } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';

import { UserDeck, UserDeckAdapter } from 'src/app/Model/UserDeck/user-deck.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  url = environment.apiUrl;
  private baseUrl = this.url + "/API/Deck/";
  constructor(private http: HttpClient, private adapterDTO: CardAdapterFromDTO, private adapterCard: CardAdapter, private cookieService: CookieService,
    private userDeckAdapter : UserDeckAdapter,private  cdall : CardDetailsDTOAllAdapter) { }


  getUserDeck(): Observable<UserDeck[]> {
    const url = `${this.baseUrl}test/`;
    let params = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
    return this.http.get<UserDeck[]>(url).pipe(
      map((data: UserDeck[]) => data.map((item) => this.userDeckAdapter.adapt(item)))
    );
  }
}
