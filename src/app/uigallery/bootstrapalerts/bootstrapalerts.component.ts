import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapalerts',
  templateUrl: './bootstrapalerts.component.html',
  styleUrls: ['./bootstrapalerts.component.css']
})
export class BootstrapalertsComponent implements OnInit {
  @Input() dismissible = true;
  @Input() body = `<h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>`;
  @Input() type = "success"
  constructor() { }

  ngOnInit(): void {
  }

}
