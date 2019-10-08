import { Component, OnInit } from '@angular/core';
import { RankingEntry } from './ranking-entry.model';
import { ClassType } from '../shared/class-type.enum';

@Component({
  selector: 'dk-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public classType = ClassType;
  public slayers: Array<RankingEntry>;
  public vampires: Array<RankingEntry>;
  public ousters: Array<RankingEntry>;

  constructor() { }

  ngOnInit() {
    this.mockData();
  }

  private mockData(): void {
    this.slayers = new Array<RankingEntry>();
    this.vampires = new Array<RankingEntry>();
    this.ousters = new Array<RankingEntry>();

    this.mock(this.slayers);
    this.mock(this.vampires);
    this.mock(this.ousters);
  }

  private mock(list: Array<RankingEntry>): void {
    for (let i = 1; i <= 20; i++) {
      const entry: RankingEntry = {
        playerName: `Player ${i}`,
        playerRank: i * 2,
        position: i,
        rankingData: `${i * 5}`
      };

      list.push(entry);
    }
  }

}
