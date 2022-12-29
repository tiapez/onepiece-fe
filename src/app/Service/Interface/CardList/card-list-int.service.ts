import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { CardDetailsDTO, CardDetailsDTOAdapter, CardDetailsDTOAllAdapter } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardListIntService {
  url = environment.apiUrl;
  private baseUrl = this.url + "/api/card/";
  constructor(private http: HttpClient,private cookieService: CookieService,
    private cardDetailsDTOAdapter : CardDetailsDTOAdapter,private  cdall : CardDetailsDTOAllAdapter) { }
    httpParams = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));

  getAllDetails(set : string): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}allDetails`;
    let params = this.httpParams.set("set",set);
    return this.http.get<CardDetailsDTO[]>(url, { params} ).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cardDetailsDTOAdapter.adapt(item)))
    );
  }

  getAllClassic(set : string): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}allClassic`;
    let params = this.httpParams.set("set",set);
    return this.http.get<CardDetailsDTO[]>(url, { params} ).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cardDetailsDTOAdapter.adapt(item)))
    );
  }

  getAll(): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}all`;
    return this.http.get<CardDetailsDTO[]>(url).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cdall.adapt(item)))
    );
  }

  getDeckCard(deck : Deck): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}deckCardList`;
    let params = this.httpParams;
    return this.http.post<CardDetailsDTO[]>(url,deck,{params}).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cardDetailsDTOAdapter.adapt(item)))
    );
  }

}
