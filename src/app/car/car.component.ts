import { Component, OnInit } from '@angular/core';
import { CarService } from '../Services/car.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public data: any = [];
  constructor(private service : CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() : void{
    this.service.getAllCars().subscribe(c => this.data = c);
  }

}
