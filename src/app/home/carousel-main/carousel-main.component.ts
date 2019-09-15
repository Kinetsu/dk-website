import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dk-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.scss']
})
export class CarouselMainComponent implements OnInit, AfterViewInit {

  public images = new Array<string>();

  constructor(private changeDetector: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.images.push('../assets/images/carousel-01.jpg');
    this.images.push('../assets/images/carousel-02.jpg');
    this.images.push('../assets/images/carousel-03.jpg');
  }

  public ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

}
