import { Component, OnInit } from '@angular/core';
import { News, NewsType } from './news-card.model';
import { TranslateService } from 'src/app/translate.service';

@Component({
  selector: 'dk-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

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
