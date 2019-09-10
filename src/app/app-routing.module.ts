import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CdtComponent } from './pages/cdt/cdt.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepTreeComponent } from './pages/step-tree/step-tree.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { PlazoComponent } from './pages/plazo/plazo.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cdt-virtual', component: CdtComponent },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-tree', component: StepTreeComponent },
  { path: 'plazo', component: PlazoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
