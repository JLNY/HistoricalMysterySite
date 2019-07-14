import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticle, IArticleRecord } from 'src/app/types/article';

@Component({
  selector: 'hm-herostories',
  templateUrl: './herostories.component.html',
  styleUrls: ['./herostories.component.css']
})
export class HerostoriesComponent implements OnInit {

  heroArticles: IArticleRecord[];
  leftherostory: IArticleRecord;
  midherostory: IArticleRecord[];
  rightherostory: IArticleRecord;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getHeroArticles().subscribe(
      articles => {
        this.heroArticles = articles
        this.leftherostory = articles[0];
        this.midherostory = articles.slice(1, 4);
        this.rightherostory = articles[4];
      }
    );
  }

}
