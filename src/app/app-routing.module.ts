import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CdtComponent } from './pages/cdt/cdt.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { ThreeStepComponent } from './pages/three-step/three-step.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { PlazoComponent } from './pages/plazo/plazo.component';
import { AccountsComponent } from './pages/accounts/accounts.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'cdt-virtual', component: CdtComponent },
  { path: 'form', component: StepTwoComponent },
  { path: 'step', component: ThreeStepComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cdt-virtual', component: CdtComponent },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: ThreeStepComponent },
  { path: 'plazo', component: PlazoComponent },
  { path: 'accounts', component: AccountsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
