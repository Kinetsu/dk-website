import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'dk-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss']
})
export class NavBarTopComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }

}
