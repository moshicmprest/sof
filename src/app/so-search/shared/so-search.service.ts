import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SoSearchService {

  stackSubject = new Subject();
  
    constructor(private http: HttpClient) { }
  
    searchText(tag: string) {
      return this.http.get(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`);
    }  
}
