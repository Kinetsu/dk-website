import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-server-status-card',
  templateUrl: './server-status-card.component.html',
  styleUrls: ['./server-status-card.component.scss']
})
export class ServerStatusCardComponent implements OnInit {

  public status = 'OFFLINE';
  public onlinePlayers = 0;

  constructor() { }

  ngOnInit() {
  }

}
