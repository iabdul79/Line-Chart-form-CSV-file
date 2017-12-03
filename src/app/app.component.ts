import { Component } from '@angular/core';
import { ParserService } from './service/parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  graphData;
  labels;
  readingComplete;
  errorMessage;

  constructor(private parser: ParserService) {}

  onFileChange(upFiles) {
    const file = upFiles.srcElement.files[0];
    const csvRegx: RegExp = /\.(csv)$/i;
    if (csvRegx.test(file.name)) {
      this.errorMessage = null;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = this.onReadingCompleted;
    } else {
      console.log('Invalid File');
      this.errorMessage = 'Invalid file';
    }
  }

  onReadingCompleted = (reader) => {
    this.parser.parseFile(reader.currentTarget.result).subscribe(x => this.graphData = x);
    this.parser.getXAxisLabels().subscribe(x => this.labels = x);
    this.readingComplete = true;
  }
}
