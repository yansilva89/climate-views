import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  cityName: string;
  stateName: string;
  citySelected: {} = {};
  list = [];

  constructor(private requestService: RequestsService) { }

  ngOnInit() { }

  getLocales() {
    this.requestService.getLocales(this.cityName, this.stateName).subscribe(data => {
      this.citySelected = data[0];
      this.getClimate();
    });
  }

  getClimate() {
    this.requestService.getClimate(this.citySelected['id']).subscribe(climate => {
      this.list = climate.data.filter(item => climate.data.indexOf(item) < 3);
      console.log(this.list);
    });
  }

}
