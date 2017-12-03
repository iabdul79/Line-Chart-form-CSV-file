import { Component, Input } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input() graphData;
  @Input() labels;
  @Input() loadGraph;
  constructor() { }
  public lineChartOptions: any = {
    responsive: true,
    elements: { line: { tension: 0 } }
  };
  public lineChartLegend = true;

}
