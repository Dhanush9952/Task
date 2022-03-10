import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarchComponent } from './march/march.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { JuneComponent } from './june/june.component';
import { JulyComponent } from './july/july.component';
import { AugustComponent } from './august/august.component';

const routes: Routes = [
  {path:'march',component:MarchComponent},
  {path:'april',component:AprilComponent},
  {path:'may',component:MayComponent},
  {path:'june',component:JuneComponent},
  {path:'july',component:JulyComponent},
  {path:'august',component:AugustComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
