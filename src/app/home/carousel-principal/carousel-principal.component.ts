import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dk-carousel-principal',
  templateUrl: './carousel-principal.component.html',
  styleUrls: ['./carousel-principal.component.scss']
})
export class CarouselPrincipalComponent implements OnInit, AfterViewInit {

  public imagens = new Array<string>();

  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.imagens.push('../assets/imagens/carousel-01.jpg');
    this.imagens.push('../assets/imagens/carousel-02.jpg');
    this.imagens.push('../assets/imagens/carousel-03.jpg');
  }

  public ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
