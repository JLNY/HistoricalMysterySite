import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetabarComponent } from './metabar/metabar.component';
import { MetahottagComponent } from './dashboard/metahottag/metahottag.component';
import { HerostoriesComponent } from './dashboard/herostories/herostories.component';
import { FeaturecontainerComponent } from './dashboard/featurecontainer/featurecontainer.component';
import { FeaturestoriesComponent } from './dashboard/featurecontainer/featurestories/featurestories.component';
import { PopularstoriesComponent } from './dashboard/featurecontainer/popularstories/popularstories.component';
import { ArticleviewerComponent } from './articleviewer/articleviewer.component';
import { SidesharewidgetComponent } from './articleviewer/sidesharewidget/sidesharewidget.component';
import { ArticlecontentviewerComponent } from './articleviewer/articlecontentviewer/articlecontentviewer.component';

import { ArticleService } from './articleservice/article.service';
import { AuthService } from './user/auth.service';
import { ActivityService } from './articleservice/activity.service';
import { ArticlecomposeComponent } from './articlecompose/articlecompose.component';
import { Error404Component } from './error/error404/error404.component';

import { ArticleViewerRouteActivator } from './articleviewer/articleviewer-route-activator.service'
import { FormsModule } from '@angular/forms';
import { SearchmodalComponent } from './searchmodal/searchmodal.component';
import { JQ_TOKEN } from './jqueryservice/jquery.service';
import { ModaltriggerDirective } from './modaltrigger/modaltrigger.directive';
import { ArticleclapComponent } from './articleclap/articleclap.component';

let jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetabarComponent,
    MetahottagComponent,
    HerostoriesComponent,
    FeaturecontainerComponent,
    FeaturestoriesComponent,
    PopularstoriesComponent,
    ArticleviewerComponent,
    SidesharewidgetComponent,
    ArticlecontentviewerComponent,
    ArticlecomposeComponent,
    Error404Component,
    SearchmodalComponent,
    ModaltriggerDirective,
    ArticleclapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    ArticleService, 
    ArticleViewerRouteActivator,
    {provide: 'canDeactivateComposeArticle', useValue: checkDirtyState },
    {provide: JQ_TOKEN, useValue: jQuery},
    AuthService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:ArticlecomposeComponent){
  if (component.isDirty){
    return window.confirm('You have not saved this article, do you really want to leave?')
  }
  return true
}