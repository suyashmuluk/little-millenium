import { Component } from '@angular/core';
import Chart from 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers';
import { EventService } from './services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
  selected = 5;
  public chart: any;
  panel_state: any;
  private subscription!: Subscription;

  constructor(private eventService: EventService) {
    this.subscription = this.eventService.data$.subscribe((data) => {
      this.panel_state = data;

      let main_panel = document.getElementById('main_panel');
      main_panel?.classList.toggle('expanded_panel')
    });
  }

  ngOnInit() {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "",
            data: ['100', '150', '300', '400', '350', '320', '280', '250', '275', '300', '350'],
            backgroundColor: '#007fdd',
            borderColor: '#2ea9ff',
            tension: 0.4,
          }
        ]
      },
      options: {
        aspectRatio: 3,
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }

    });
  }
}
