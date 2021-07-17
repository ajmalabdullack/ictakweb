import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicMembershipComponent } from './academic-membership/academic-membership.component';
import { PartnershipComponent } from './partnership/partnership.component';

const routes: Routes = [{path:"",component:AcademicMembershipComponent},{path:"partnership",component:PartnershipComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
