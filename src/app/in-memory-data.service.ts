import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {


  private REST_API_URL = 'https://parseapi.back4app.com/classes/City?count=1&limit=0';
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Parse-Application-Id': 'kysTM8sxjGAzL9kRFu5SbI3zRSZgRvzj6Feb9CaI', // This is the fake app's application id
              'X-Parse-Master-Key': 'saeclF3NoaHo0ETX9uN88H85xT2KAY4QCHNp4n1F'
    })
  };
  constructor(private httpClient: HttpClient) { }
  /**
   * getLocation
   */
  public getLocation() {
    const url = `${this.REST_API_URL}`;
    return this.httpClient.post(url,this.httpOptions)
  }
}
