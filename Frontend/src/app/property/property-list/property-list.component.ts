import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../property-card/IProperty.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  propertis: Array<IProperty> = [];

  constructor(private housingService : HousingService){

  }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
        data=>{
          this.propertis = data;
          console.log(data);
        }, error => {
          console.log('http Error');
          console.log(error);
        }
    );
  }

}
