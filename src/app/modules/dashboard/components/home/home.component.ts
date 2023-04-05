import { Component } from '@angular/core';
import { ShowAndHiddenService } from 'src/app/shared/services/show-and-hidden/show-and-hidden.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(public showAndHiddenService: ShowAndHiddenService) {}
}
