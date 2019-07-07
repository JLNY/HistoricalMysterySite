import { Component, OnInit, ViewEncapsulation, Input, OnChanges  } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticle } from 'src/app/types/article';
import { Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'hm-articlecontentviewer',
  templateUrl: './articlecontentviewer.component.html',
  styleUrls: ['./articlecontentviewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlecontentviewerComponent implements OnInit, OnChanges {
  @Input() articleid: number;
  article: IArticle;

  constructor(private articleservice: ArticleService,
              private auth: AuthService,
              private activityService: ActivityService) { }

  ngOnInit() {
    this.article = this.articleservice.getStory(this.articleid);
  }

  ngOnChanges() {
    this.article = this.articleservice.getStory(this.articleid);
  }

  toggleClap(articleid: number) {
    if (this.userHasClapped(articleid)) {
      this.activityService.unClap(articleid, this.auth.currentUser.userName);
      this.articleservice.getStory(articleid).articleclapnum -= 1;
    } else {
      this.activityService.clap(articleid, this.auth.currentUser.userName);
      this.articleservice.getStory(articleid).articleclapnum += 1;
    }
  }

  userHasClapped(articleid: number) {
    return this.activityService.userHasClapped(articleid, this.auth.currentUser.userName);
  }

  isLoggedIn(){
    return this.auth.isAuthenticated();
  }

}
