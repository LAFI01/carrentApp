import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://localhost:44371/api/car';
  // private apiKey = 'keyoyR6sPUS1SCK4k'
  // private header = { "Authorization": "Bearer " + this.apiKey };
  // public data: any = {};
  constructor(private http : HttpClient) {

  }
    

    getAllCars(){
      
      return this.http.get(this.apiUrl)
      .pipe(
        tap(response => console.log(response))
      );
    }

   
}
