import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dk-mat-errors',
  templateUrl: './mat-errors.component.html',
  styleUrls: ['./mat-errors.component.scss']
})
export class MatErrorsComponent implements OnInit {

  @Input() field: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
