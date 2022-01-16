import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppReq,Applicationresponse } from 'src/models/application';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  appurl=environment.applicationurl;

  constructor(public http:HttpClient) { }

  SubmitApplication(data:AppReq): Observable<Applicationresponse>{
    return this.http.post<Applicationresponse>(this.appurl,data,{responseType:'json'});
  }
}
