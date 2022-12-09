import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DetailsDTO } from 'src/app/Model/DetailsDTO/details-dto.model';
import { Filter } from 'src/app/Model/Filter/filter.model';
import { UserCard, UserCardAdapter } from 'src/app/Model/UserCard/user-card.model';
@Injectable({
  providedIn: 'root'
})
export class CardActionService {
  private baseUrl = "http://localhost:9191/API/Action";
  public flag : boolean | undefined;
  constructor(private http: HttpClient,private cookieService: CookieService,
    private userCardDTO : UserCardAdapter) { }

 
 
   addCard(cardId : number): Observable<boolean> {
    const url = `${this.baseUrl}/addDetails`;
    let params = new HttpParams().set("cardId",cardId)
    .set("nick",this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
    return this.http.post<boolean>(url,params).pipe(      
      map((data: boolean) => { return data }),
    catchError((error: HttpErrorResponse) => {
      return this.handleErrorSaveUser(error);
    })
  );
}

removeCard(cardId : number): Observable<boolean> {
  const url = `${this.baseUrl}/removeDetails`;
  let params = new HttpParams().set("cardId",cardId)
  .set("nick",this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
  return this.http.post<boolean>(url,params).pipe(      
    map((data: boolean) => { return data }),
  catchError((error: HttpErrorResponse) => {
    return this.handleErrorSaveUser(error);
  })
);
}

addCardDetails(cardId : number,details : DetailsDTO): Observable<boolean> {
  const url = `${this.baseUrl}/addDetails`;
  let params = new HttpParams().set("cardId",cardId)
  .set("nick",this.cookieService.get("U3RpbmtvU3Rhbmtvcw==")).set("language",details.language).set("condition",details.codCondition);
  return this.http.post<boolean>(url,params).pipe(      
    map((data: boolean) => { return data }),
  catchError((error: HttpErrorResponse) => {
    return this.handleErrorSaveUser(error);
  })
);
}

removeCardDetails(cardId : number,details : DetailsDTO): Observable<boolean> {
const url = `${this.baseUrl}/removeDetails`;
let params = new HttpParams().set("cardId",cardId)
.set("nick",this.cookieService.get("U3RpbmtvU3Rhbmtvcw==")).set("language",details.language).set("condition",details.codCondition);
return this.http.post<boolean>(url,params).pipe(      
  map((data: boolean) => { return data }),
catchError((error: HttpErrorResponse) => {
  return this.handleErrorSaveUser(error);
})
);
}

getCardDetails(cardId : number,filter : Filter): Observable<UserCard[]> {
  const url = `${this.baseUrl}/getDetailsCard`;
  let params = new HttpParams().set("cardId",cardId)
  .set("nick",this.cookieService.get("U3RpbmtvU3Rhbmtvcw=="));
 return this.http.post<UserCard[]>(url,filter,{params}).pipe(      
    map((data: UserCard[]) => data.map((item) => this.userCardDTO.adapt(item))),
  catchError((error: HttpErrorResponse) => {
    return this.handleErrorSaveUser(error);
  })
  );

  }

private handleErrorSaveUser(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  if (error.status == 500) {
    return throwError(() => new Error('User Already Exist'));
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
