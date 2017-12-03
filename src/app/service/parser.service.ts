import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ParserService {

  constructor() { }

  xAxisLabels = [];

  updateXAxisLabel(label) {
    if (this.xAxisLabels.indexOf(label) < 0) {
      this.xAxisLabels.push(label);
    }
  }

  parseValue(value) {
    const points = value.split('|');
    this.updateXAxisLabel(points[0]);
    return { x: points[0], y: points[1] };
  }

  parseLine(eachLine) {
    const values = eachLine.split(',');
    const series = {
      data: [],
      label: values[0],
      fill: false
    };
    for (let value = 1; value < values.length; value++) {
      series.data.push(this.parseValue(values[value]));
    }
    return series;
  }

  parseFile(file): Observable<any> {
    const lines = file.split('\n');
    const lineChartData = [];
    for (let line = 0; line < lines.length - 1; line++) {
      lineChartData.push(this.parseLine(lines[line]));
    }
    return Observable.create(x => x.next(lineChartData));
  }

  getXAxisLabels(): Observable<any> {
    return Observable.create(x => x.next(this.xAxisLabels.sort()));
  }

}
