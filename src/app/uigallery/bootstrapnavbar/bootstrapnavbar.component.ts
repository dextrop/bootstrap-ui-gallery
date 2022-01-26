import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapnavbar',
  templateUrl: './bootstrapnavbar.component.html',
  styleUrls: ['./bootstrapnavbar.component.css']
})
export class BootstrapnavbarComponent implements OnInit {
  @Input() type = "light"
  @Input() brandhtml = "Ask Jennie";
  constructor() { }

  ngOnInit(): void {
  }

}
