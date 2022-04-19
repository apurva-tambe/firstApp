import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { VisitUsComponent } from './visit-us/visit-us.component';

const routes: Routes = [
  { path:'',component:SamplePageComponent},
  { path: 'Visit', component: VisitUsComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
