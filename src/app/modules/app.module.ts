import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { NgChatModule } from 'ng-chat';

import { AppRoutingModule } from '../routings/app-routing.module';
import { AppComponent } from '../components/app/app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MetabarComponent } from '../components/metabar/metabar.component';
import { MetahottagComponent } from '../components/metahottag/metahottag.component';
import { HerostoriesComponent } from '../components/herostories/herostories.component';
import { FeaturecontainerComponent } from '../components/featurecontainer/featurecontainer.component';
import { FeaturestoriesComponent } from '../components/featurecontainer/featurestories/featurestories.component';
import { PopularstoriesComponent } from '../components/featurecontainer/popularstories/popularstories.component';
import { ArticleviewerComponent } from '../components/articleviewer/articleviewer.component';
import { SidesharewidgetComponent } from '../components/sidesharewidget/sidesharewidget.component';
import { ArticlecontentviewerComponent } from '../components/articlecontentviewer/articlecontentviewer.component';

import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { ActivityService } from '../services/activity.service';
import { ArticlecomposeComponent } from '../components/articlecompose/articlecompose.component';
import { Error404Component } from '../components/error/error404/error404.component';

import { ArticleViewerRouteActivator } from '../services/articleviewer-route-activator.service';
import { SearchmodalComponent } from '../components/searchmodal/searchmodal.component';
import { JQ_TOKEN } from '../services/jquery.service';
import { ModaltriggerDirective } from '../directives/modaltrigger.directive';
import { ArticleclapComponent } from '../components/articleclap/articleclap.component';
import { ChatComponent } from '../components/chat/chat.component';
let jqkey = "$"
const jQuery = window[jqkey];

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
    ArticleclapComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    JwSocialButtonsModule,
    NgChatModule
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

export function checkDirtyState(component: ArticlecomposeComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this article, do you really want to leave?');
  }
  return true;
}
