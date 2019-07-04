import { Component, OnInit, ViewEncapsulation, Input, OnChanges  } from '@angular/core';
import { ArticleService } from 'src/app/articleservice/article.service';
import { IArticle } from 'src/app/articleservice/article';
import { Params } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { ActivityService } from 'src/app/articleservice/activity.service'

@Component({
  selector: 'hm-articlecontentviewer',
  templateUrl: './articlecontentviewer.component.html',
  styleUrls: ['./articlecontentviewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlecontentviewerComponent implements OnInit, OnChanges {
  @Input() articleid: number
  article: IArticle

  constructor(private articleservice: ArticleService,
    private auth: AuthService,
    private activityService: ActivityService) { }

  ngOnInit() {
    this.article = this.articleservice.getStory(this.articleid);
  }

  ngOnChanges(){
    this.article = this.articleservice.getStory(this.articleid);
  }

  toggleClap(articleid: number){
    if (this.userHasClapped(articleid)){
      this.activityService.unClap(articleid, this.auth.currentUser.userName);
    }else{
      this.activityService.clap(articleid, this.auth.currentUser.userName);
    }
  }

  userHasClapped(articleid: number){
    return this.activityService.userHasClapped(articleid, this.auth.currentUser.userName);
  }

}
