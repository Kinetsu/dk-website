import { Component, OnInit, Input } from '@angular/core';
import { RankingEntry, ClassType } from '../ranking-entry.model';

@Component({
  selector: 'dk-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.scss']
})
export class RankingTableComponent implements OnInit {

  public tableColumns: Array<string> = ['position', 'playerRank', 'playerName', 'rankingData'];

  @Input() classType: ClassType;
  @Input() data: Array<RankingEntry>;

  constructor() { }

  ngOnInit() {
  }

}
