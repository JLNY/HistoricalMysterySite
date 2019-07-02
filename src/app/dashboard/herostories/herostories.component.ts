import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/articleservice/article.service';
import { IArticle } from 'src/app/articleservice/article';

@Component({
  selector: 'hm-herostories',
  templateUrl: './herostories.component.html',
  styleUrls: ['./herostories.component.css']
})
export class HerostoriesComponent implements OnInit {

  leftherostory: IArticle;
  midherostory: IArticle[];
  rightherostory: IArticle;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    var heroArticles = this.articleService.getHeroStories();
    this.leftherostory = heroArticles[0];
    this.midherostory = heroArticles.slice(1,4);
    this.rightherostory = heroArticles[4];
  }

}