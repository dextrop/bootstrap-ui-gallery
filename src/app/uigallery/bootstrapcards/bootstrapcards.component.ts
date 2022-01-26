import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrapcards',
  templateUrl: './bootstrapcards.component.html',
  styleUrls: ['./bootstrapcards.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BootstrapcardsComponent implements OnInit {
  @Input() image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT121fx6mD3VxNVWzPsj03o5te6Cdf7sb7WIA&usqp=CAU";
  @Input() title = "Card Title Here";
  @Input() description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  @Input() link = "https://stackoverflow.com/";
  @Input() btntext = "Click to view"
  constructor() { }

  ngOnInit(): void {
  }

}
