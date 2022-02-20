import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './simple-form/final/final.component';
import { InitialComponent } from './simple-form/initial/initial.component';
import { SecondComponent } from './simple-form/second/second.component';
import { InitialStepComponent } from './step-form/initial-step/initial-step.component';
import { StepFormComponent } from './step-form/step-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'form', component: StepFormComponent },
  { path: 'first', component: InitialComponent },
  { path: 'second', component: SecondComponent },
  { path: 'final', component: FinalComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

