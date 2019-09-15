import { Component, OnInit } from '@angular/core';
import { News, NewsType } from './news';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'dk-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public newsList = new Array<News>();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.newsList.push({
      id: 1,
      type: NewsType.Info,
      title: 'Information',
      date: new Date()
    });

    this.newsList.push({
      id: 2,
      type: NewsType.Event,
      title: 'Event',
      date: new Date()
    });

    this.newsList.push({
      id: 3,
      type: NewsType.Update,
      title: 'Update',
      date: new Date()
    });
  }

}
