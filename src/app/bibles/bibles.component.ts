import { Component, OnInit } from '@angular/core';
import { Bible } from './bible.model';
import { ClassType } from '../shared/class-type.enum';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'dk-bibles',
  templateUrl: './bibles.component.html',
  styleUrls: ['./bibles.component.scss']
})
export class BiblesComponent implements OnInit {

  public bibles: Array<Bible>;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.mockData();
  }

  private mockData(): void {
    if (!this.translateService.data.ARMEGA_BONUS) {
      setTimeout(() => {
        this.mockData();
      }, 250);

      return;
    }

    this.bibles = new Array<Bible>();

    this.bibles.push({ name: 'armega', class: ClassType.Slayer, bonus: this.translateService.data.ARMEGA_BONUS });
    this.bibles.push({ name: 'arosa', class: ClassType.Slayer, bonus: this.translateService.data.AROSA_BONUS });
    this.bibles.push({ name: 'chaspa', class: ClassType.Slayer, bonus: this.translateService.data.CHASPA_BONUS });
    this.bibles.push({ name: 'concilia', class: ClassType.Slayer, bonus: this.translateService.data.CONCILIA_BONUS });
    this.bibles.push({ name: 'gregori', class: ClassType.Vampire, bonus: this.translateService.data.GREGORI_BONUS });
    this.bibles.push({ name: 'hillel', class: ClassType.Vampire, bonus: this.translateService.data.HILLEL_BONUS });
    this.bibles.push({ name: 'ini', class: ClassType.Vampire, bonus: this.translateService.data.INI_BONUS });
    this.bibles.push({ name: 'jave', class: ClassType.Vampire, bonus: this.translateService.data.JAVE_BONUS });
    this.bibles.push({ name: 'kiro', class: ClassType.Ouster, bonus: this.translateService.data.KIRO_BONUS });
    this.bibles.push({ name: 'legios', class: ClassType.Ouster, bonus: this.translateService.data.LEGIOS_BONUS });
    this.bibles.push({ name: 'mihole', class: ClassType.Ouster, bonus: this.translateService.data.MIHOLE_BONUS });
    this.bibles.push({ name: 'nema', class: ClassType.Ouster, bonus: this.translateService.data.NEMA_BONUS });
  }

}
