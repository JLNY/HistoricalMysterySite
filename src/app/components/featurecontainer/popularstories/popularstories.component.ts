import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { IArticle } from 'src/app/types/article';

@Component({
  selector: 'hm-popularstories',
  templateUrl: './popularstories.component.html',
  styleUrls: ['./popularstories.component.css']
})
export class PopularstoriesComponent implements OnInit {

  popularStories: IArticle[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.popularStories = this.articleService.getHeroStories();
  }

}
