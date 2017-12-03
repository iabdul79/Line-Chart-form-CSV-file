import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { GraphComponent } from './component/graph/graph.component';
import { ParserService } from './service/parser.service';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [ParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
