import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapoffcanvas',
  templateUrl: './bootstrapoffcanvas.component.html',
  styleUrls: ['./bootstrapoffcanvas.component.css']
})
export class BootstrapoffcanvasComponent implements OnInit {
  @Input() direction = "start" // can be end, top or bottom
  @Input() btntext = "Click"
  constructor() { }

  ngOnInit(): void {
  }

}
