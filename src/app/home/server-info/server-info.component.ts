import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {

  public readonly version = '6.69';
  public readonly rateXP = '100x';
  public readonly petXP = '100x';
  public readonly rankXP = '100x';

  constructor() { }

  ngOnInit() {
  }

}
