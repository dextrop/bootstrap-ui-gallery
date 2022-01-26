import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapbreadcrumb',
  templateUrl: './bootstrapbreadcrumb.component.html',
  styleUrls: ['./bootstrapbreadcrumb.component.css']
})
export class BootstrapbreadcrumbComponent implements OnInit {
  navigation = [
    {
      "name": "Home",
      "link": "/",
      "active": true
    },
    {
      "name": "Dashboard",
      "link": "/",
    },
    {
      "name": "Page",
      "link": "",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
