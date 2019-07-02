import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleviewerComponent } from './articleviewer/articleviewer.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article/:id', component: ArticleviewerComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
