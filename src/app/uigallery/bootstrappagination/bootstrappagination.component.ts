import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrappagination',
  templateUrl: './bootstrappagination.component.html',
  styleUrls: ['./bootstrappagination.component.css']
})
export class BootstrappaginationComponent implements OnInit {
  total_pages = 12
  array = []
  selected = 1;
  onpagechange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.array = []
    for (let i=0; i<this.total_pages; i++) {
      this.array.push(i+1)
    }
  }

  event_onpagechange() {
    this.onpagechange.emit("Clicked")
  }
}
