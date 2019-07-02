import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { ArticleviewerComponent } from './articleviewer/articleviewer.component'
import { ArticlecomposeComponent } from './articlecompose/articlecompose.component';
import { Error404Component } from './error/error404/error404.component';
import { ArticleViewerRouteActivator } from './articleviewer/articleviewer-route-activator.service'


const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  {path:"article/new", component: ArticlecomposeComponent, canDeactivate: ['canDeactivateComposeArticle']},
  {path:"article/:articleid", component: ArticleviewerComponent, canActivate:[ArticleViewerRouteActivator]},
  {path:"404", component: Error404Component},
  {path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
