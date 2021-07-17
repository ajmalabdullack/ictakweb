import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { AcademicMembershipComponent } from './academic-membership/academic-membership.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnershipComponent,
    AcademicMembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
