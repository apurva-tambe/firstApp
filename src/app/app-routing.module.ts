import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LaserhairreductionComponent } from './laserhairreduction/laserhairreduction.component';

const routes: Routes = [
  { path:'',component:HomepageComponent},
  { path: 'Laser', component: LaserhairreductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
