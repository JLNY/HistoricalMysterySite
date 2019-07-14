import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticle, IArticleRecord } from 'src/app/types/article';

@Component({
  selector: 'hm-popularstories',
  templateUrl: './popularstories.component.html',
  styleUrls: ['./popularstories.component.css']
})
export class PopularstoriesComponent implements OnInit {

  popularStories: IArticleRecord[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getHeroStories().subscribe(
      articles => {
        console.log(articles)
        this.popularStories = articles
      }
    );
  }

}
