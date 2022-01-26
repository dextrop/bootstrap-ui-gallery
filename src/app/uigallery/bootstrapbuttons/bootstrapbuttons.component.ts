import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapbuttons',
  templateUrl: './bootstrapbuttons.component.html',
  styleUrls: ['./bootstrapbuttons.component.css']
})
export class BootstrapbuttonsComponent implements OnInit {
  btnclass = "btn"
  @Input() type = "primary";
  @Input() disabled = false;
  @Input() btntext = "Click to continue";
  @Input() onclicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    if ( this.type === "primary") { this.btnclass += " btn-primary"; }
    else if ( this.type === "secondary") { this.btnclass += " btn-secondary"; }
    else if ( this.type === "success") { this.btnclass += " btn-success"; }
    else if ( this.type === "danger") { this.btnclass += " btn-danger"; }
    else if ( this.type === "warning") { this.btnclass += "btn-warning"; }
    else if ( this.type === "light") { this.btnclass += "btn-light"; }
    else if ( this.type === "dark") { this.btnclass += "btn-dark"; }
    if ( this.type === "primary-outline") { this.btnclass += " btn-outline-primary"; }
    else if ( this.type === "secondary-outline") { this.btnclass += " btn-outline-secondary"; }
    else if ( this.type === "success-outline") { this.btnclass += " btn-outline-success"; }
    else if ( this.type === "danger-outline") { this.btnclass += " btn-outline-danger"; }
    else if ( this.type === "warning-outline") { this.btnclass += "btn-outline-warning"; }
    else if ( this.type === "info-outline") { this.btnclass += "btn-outline-info"; }
    else if ( this.type === "light-outline") { this.btnclass += "btn-outline-light"; }
    else if ( this.type === "dark-outline") { this.btnclass += "btn-outline-dark"; }
  }

  event_onclicked() {
    this.onclicked.emit("Clicked");
  }
}
