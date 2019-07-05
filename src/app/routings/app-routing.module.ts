import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ArticleviewerComponent } from '../components/articleviewer/articleviewer.component';
import { ArticlecomposeComponent } from '../components/articlecompose/articlecompose.component';
import { Error404Component } from '../components/error/error404/error404.component';
import { ArticleViewerRouteActivator } from '../services/articleviewer-route-activator.service';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'article/new', component: ArticlecomposeComponent, canDeactivate: ['canDeactivateComposeArticle']},
  {path: 'article/:articleid', component: ArticleviewerComponent, canActivate: [ArticleViewerRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'user', loadChildren: '../modules/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
