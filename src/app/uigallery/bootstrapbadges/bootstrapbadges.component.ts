import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrapbadges',
  templateUrl: './bootstrapbadges.component.html',
  styleUrls: ['./bootstrapbadges.component.css']
})
export class BootstrapbadgesComponent implements OnInit {
  @Input() body = "Tag 1";
  @Input() rounded_corders = true;
  @Input() type = "success";
  badgeclass = "badge";
  constructor() { }

  ngOnInit(): void {
    if (this.rounded_corders) {
      this.badgeclass += " rounded-pill"
    }

    if ( this.type === "primary") { this.badgeclass += " bg-primary"; }
    else if ( this.type === "secondary") { this.badgeclass += " bg-secondary"; }
    else if ( this.type === "success") { this.badgeclass += " bg-success"; }
    else if ( this.type === "danger") { this.badgeclass += " bg-danger"; }
    else if ( this.type === "warning") { this.badgeclass += " bg-warning text-dark"; }
    else if ( this.type === "info") { this.badgeclass += " bg-info text-dark"; }
    else if ( this.type === "light") { this.badgeclass += " bg-light text-dark"; }
    else if ( this.type === "dark") { this.badgeclass += " bg-dark"; }
    else { this.badgeclass += " bg-primary"; }
  }

}
