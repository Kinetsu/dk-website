import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.translate.use('en');

    this.matIconRegistry.addSvgIcon('flg_en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/country-flags/en.svg'));
    this.matIconRegistry.addSvgIcon('flg_br', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/country-flags/br.svg'));
  }

}
