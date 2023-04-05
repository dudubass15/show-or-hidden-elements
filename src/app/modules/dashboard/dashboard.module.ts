import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ShowAndHiddenDirective } from 'src/app/shared/directives/show-and-hidden/show-and-hidden.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ShowAndHiddenDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}
