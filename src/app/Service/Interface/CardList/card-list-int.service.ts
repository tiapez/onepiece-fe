import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { CardDetails, CardDetailsAdapter, CardDetailsAdapterVoid } from 'src/app/Model/CardDetails/card-details.model';
import { Deck } from 'src/app/Model/Deck/deck.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardListIntService {
  url = environment.apiUrl;
  private baseUrl = this.url + "/api/card/";
  constructor(private http: HttpClient,private cookieService: CookieService,
    private cardDetailsAdapter : CardDetailsAdapter,private  cardDetailsAdapterVoid : CardDetailsAdapterVoid) { }
    httpParams = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));

  getAllDetails(set : string): Observable<CardDetails[]> {
    const url = `${this.baseUrl}allDetails`;
    let params = this.httpParams.set("set",set);
    return this.http.get<CardDetails[]>(url, { params} ).pipe(
      map((data: CardDetails[]) => data.map((item) => this.cardDetailsAdapter.adapt(item)))
    );
  }

  getAllClassic(set : string): Observable<CardDetails[]> {
    const url = `${this.baseUrl}allClassic`;
    let params = this.httpParams.set("set",set);
    return this.http.get<CardDetails[]>(url, { params} ).pipe(
      map((data: CardDetails[]) => data.map((item) => this.cardDetailsAdapter.adapt(item)))
    );
  }

  getAll(): Observable<CardDetails[]> {
    const url = `${this.baseUrl}all`;
    return this.http.get<CardDetails[]>(url).pipe(
      map((data: CardDetails[]) => data.map((item) => this.cardDetailsAdapterVoid.adapt(item)))
    );
  }

  getDeckCard(deck : Deck): Observable<CardDetails[]> {
    const url = `${this.baseUrl}deckCardList`;
    let params = this.httpParams;
    return this.http.post<CardDetails[]>(url,deck,{params}).pipe(
      map((data: CardDetails[]) => data.map((item) => this.cardDetailsAdapter.adapt(item)))
    );
  }

}
