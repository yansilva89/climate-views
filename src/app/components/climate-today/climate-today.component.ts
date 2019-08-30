import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-climate-today',
  templateUrl: './climate-today.component.html',
  styleUrls: ['./climate-today.component.scss']
})
export class ClimateTodayComponent implements OnInit {
  @Input() climateToday: any;

  constructor() { }

  ngOnInit() {}

  getHours() {
    const now = new Date();
    if (now.getHours () >= 0 && now.getHours () < 5) {
      return 'dawn';
    } else if (now.getHours () >= 5 && now.getHours () < 9) {
      return 'morning';
    } else if (now.getHours () >= 9 && now.getHours () < 12) {
      return 'day';
    } else if (now.getHours () >= 12 && now.getHours () < 18) {
      return 'afternoon';
    } else {
      return 'night';
    }
  }
}
