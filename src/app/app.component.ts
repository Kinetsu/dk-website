import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.use('en');
  }

}
