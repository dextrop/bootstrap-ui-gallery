import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BootstrapaccordionComponent } from './uigallery/bootstrapaccordion/bootstrapaccordion.component';
import { BootstrapalertsComponent } from './uigallery/bootstrapalerts/bootstrapalerts.component';
import { BootstrapbadgesComponent } from './uigallery/bootstrapbadges/bootstrapbadges.component';
import { BootstrapbreadcrumbComponent } from './uigallery/bootstrapbreadcrumb/bootstrapbreadcrumb.component';
import { BootstrapbuttonsComponent } from './uigallery/bootstrapbuttons/bootstrapbuttons.component';
import { BootstrapcardsComponent } from './uigallery/bootstrapcards/bootstrapcards.component';
import { BootstrapcarouselComponent } from './uigallery/bootstrapcarousel/bootstrapcarousel.component';
import { BootstrapdropdownsComponent } from './uigallery/bootstrapdropdowns/bootstrapdropdowns.component';
import { BootstrapnavbarComponent } from './uigallery/bootstrapnavbar/bootstrapnavbar.component';
import { BootstrapoffcanvasComponent } from './uigallery/bootstrapoffcanvas/bootstrapoffcanvas.component';
import { BootstrappaginationComponent } from './uigallery/bootstrappagination/bootstrappagination.component';
import { BootstraptoastsComponent } from './uigallery/bootstraptoasts/bootstraptoasts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BootstrapaccordionComponent,
    BootstrapalertsComponent,
    BootstrapbadgesComponent,
    BootstrapbreadcrumbComponent,
    BootstrapbuttonsComponent,
    BootstrapcardsComponent,
    BootstrapcarouselComponent,
    BootstrapdropdownsComponent,
    BootstrapnavbarComponent,
    BootstrapoffcanvasComponent,
    BootstrappaginationComponent,
    BootstraptoastsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
