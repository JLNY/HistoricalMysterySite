import { Component, OnInit, ViewEncapsulation, Input, OnChanges  } from '@angular/core';
import { ArticleService } from 'src/app/articleservice/article.service';
import { IArticle } from 'src/app/articleservice/article';
import { Params } from '@angular/router';

@Component({
  selector: 'hm-articlecontentviewer',
  templateUrl: './articlecontentviewer.component.html',
  styleUrls: ['./articlecontentviewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlecontentviewerComponent implements OnInit, OnChanges {
  @Input() articleid: number
  article: IArticle

  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.article = this.articleservice.getStory(this.articleid);
  }

  ngOnChanges(){
    this.article = this.articleservice.getStory(this.articleid);
  }

}
