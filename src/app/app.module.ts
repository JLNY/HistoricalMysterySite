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
    ArticlecontentviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ArticleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
