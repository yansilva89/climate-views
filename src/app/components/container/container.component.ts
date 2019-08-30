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
  loader = false;

  constructor(private requestService: RequestsService) { }

  ngOnInit() { }

  async getLocales() {
    this.loader = true;
    await this.delay(500); // Delay
    this.requestService.getLocales(this.cityName, this.stateName).subscribe(data => {
      this.citySelected = data[0];
      this.getClimate();
      setTimeout(() => {
        this.loader = false;
      }, 0);
    });
  }

  getClimate() {
    this.requestService.getClimate(this.citySelected['id']).subscribe(climate => {
      this.list = climate.data.filter(item => climate.data.indexOf(item) < 3);
    });
  }

  // Async Delay
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
