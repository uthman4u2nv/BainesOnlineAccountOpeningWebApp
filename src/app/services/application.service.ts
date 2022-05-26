import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppReq,Applicationresponse,FixedReq,FixedDepositResponse,BVNReq,BVNResp } from 'src/models/application';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  appurl=environment.applicationurl;
  fixeddepositurl=environment.fixeddepositurl;
  bvnurl=environment.bvnurl;

  constructor(public http:HttpClient) { }

  SubmitApplication(data:AppReq): Observable<Applicationresponse>{
    return this.http.post<Applicationresponse>(this.appurl,data,{responseType:'json'});
  }
  SubmitFixedApplication(data:FixedReq): Observable<FixedDepositResponse>{
    return this.http.post<FixedDepositResponse>(this.fixeddepositurl,data,{responseType:'json'});
  }
  BvnValidation(data:BVNReq): Observable<BVNResp>{
    return this.http.post<BVNResp>(this.bvnurl,data,{responseType:'json'});
  }
}
