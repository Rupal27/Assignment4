import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/Child1/child2/child2.component';

const routes: Routes = [
  { path: '', component: ParentComponent},
  {path: 'parent/child1', component: Child1Component},
  {path: 'parent/child2', component: Child2Component},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ParentComponent,Child1Component,Child2Component];
