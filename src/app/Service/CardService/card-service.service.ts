import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { Card, CardAdapter, CardAdapterFromDTO } from 'src/app/Model/Card/card.model';
import { CardDetailsDTO, CardDetailsDTOAdapter, CardDetailsDTOAllAdapter } from 'src/app/Model/CardDetailsDTO/card-details-dto.model';
import { CardDTO } from 'src/app/Model/CardDTO/card-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  url = environment.apiUrl;
  private baseUrl = this.url + "/card/";
  constructor(private http: HttpClient, private adapterDTO: CardAdapterFromDTO, private adapterCard: CardAdapter, private cookieService: CookieService,
    private cardDetailsDTOAdapter : CardDetailsDTOAdapter,private  cdall : CardDetailsDTOAllAdapter) { }


  getAllDetails(set : number): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}getAllDetails/`;
    let params = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw==")).set("set",set);
    return this.http.get<CardDetailsDTO[]>(url, { params} ).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cardDetailsDTOAdapter.adapt(item)))
    );
  }

  getAllClassics(set : number): Observable<CardDetailsDTO[]> {
    const url = `${this.baseUrl}getAllClassic/`;
    let params = new HttpParams().set("nick", this.cookieService.get("U3RpbmtvU3Rhbmtvcw==")).set("set",set);
    return this.http.get<CardDetailsDTO[]>(url, { params} ).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cardDetailsDTOAdapter.adapt(item)))
    );
  }

  getAll(): Observable<CardDetailsDTO[]> {
    const url = this.url + '/card/all';
    return this.http.get<CardDetailsDTO[]>(url).pipe(
      map((data: CardDetailsDTO[]) => data.map((item) => this.cdall.adapt(item)))
    );
  }

}
