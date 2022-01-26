import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrapcarousel',
  templateUrl: './bootstrapcarousel.component.html',
  styleUrls: ['./bootstrapcarousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BootstrapcarouselComponent implements OnInit {
  with_cover = true;
  constructor() { }

  ngOnInit(): void {
  }

}
