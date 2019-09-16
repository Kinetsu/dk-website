import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-server-info-card',
  templateUrl: './server-info-card.component.html',
  styleUrls: ['./server-info-card.component.scss']
})
export class ServerInfoCardComponent implements OnInit {

  public readonly version = '6.69';
  public readonly rateXP = '100x';
  public readonly petXP = '100x';
  public readonly rankXP = '100x';

  constructor() { }

  ngOnInit() {
  }

}
