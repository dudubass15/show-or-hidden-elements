import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAndHiddenDirective } from './shared/directives/show-and-hidden/show-and-hidden.directive';
import { ShowAndHiddenService } from './shared/services/show-and-hidden/show-and-hidden.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShowAndHiddenDirective, ShowAndHiddenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
