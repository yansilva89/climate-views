import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-climates-view',
  templateUrl: './climates-view.component.html',
  styleUrls: ['./climates-view.component.scss']
})
export class ClimatesViewComponent implements OnInit {
  @Input() climatesView: any;
  @Input() title: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
    if (!this.title) {
      this.title = this.getDisplayDay();
    }
  }

  getDisplayDay() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const d = new Date(this.date);
    d.setDate(d.getDate() + 1);
    return days[d.getDay()];
  }

}
