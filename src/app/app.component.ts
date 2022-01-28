import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-ui-gallery';

  continue_login(obj) {
    console.log(JSON.stringify(obj, null, 2));
  }
}
