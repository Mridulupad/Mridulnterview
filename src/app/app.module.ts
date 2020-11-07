import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceExInterviewComponent } from './space-ex-interview/space-ex-interview.component';
import { SpaceService } from './Services/space.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SpaceExInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
