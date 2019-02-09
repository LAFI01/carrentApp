import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://localhost:44371/api/car';
  // private apiKey = 'keyoyR6sPUS1SCK4k'
  // private header = { "Authorization": "Bearer " + this.apiKey };
  // public data: any = {};
  constructor(private http : Http) {

  }
    

    getAllCars(){
      return this.http.get(this.apiUrl).map(response => response.json());
    }

   
}
