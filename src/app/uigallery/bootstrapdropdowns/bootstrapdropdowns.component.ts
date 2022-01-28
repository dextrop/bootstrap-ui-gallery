import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdropdowns',
  templateUrl: './bootstrapdropdowns.component.html',
  styleUrls: ['./bootstrapdropdowns.component.css']
})
export class BootstrapdropdownsComponent implements OnInit {
  @Input() type = "primary"
  @Input() action = "Select Category"
  @Input() action_items = [
    "Action 1", "Action 2", "Action 3","|","Action 4"
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
